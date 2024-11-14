import apiService from '@/utils/apiHandler'
import { withSessionRoute } from '@/utils/sessionWrapper'

export default withSessionRoute(async (req, res) => {
	const { username, password } = req.body
	if (req.method === 'POST') {
		try {
			const response = await apiService.request({
				method: 'POST',
				url: '/api/v1/participant/auth',
				data: {
					username,
					password
				}
			})

			const { access_token } = response?.data?.data || {}
			const pickProperty = { access_token }

			const authMenu = response?.data?.data?.menu || []

			req.session.auth = pickProperty
			await req.session.save()
			const encryptedAuthMenu = JSON.stringify({ menu: authMenu })
			res.status(200).send(encryptedAuthMenu)
		} catch (error) {
			if (error?.response?.status === 404) {
				res.status(404).send({
					message: 'Email atau Password Salah!',
					errors: ['Email atau Password Salah!']
				})
			} else {
				res.status(error?.response?.status ?? 500).send(error?.response?.data ?? error)
			}
		}
	} else {
		res.status(405).send({ message: 'Method not allowed' })
	}
})
