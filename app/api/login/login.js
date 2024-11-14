import { withSessionRoute } from '@/utils/sessionWrapper'; 
import apiService from '@/utils/apiHandler';

export default withSessionRoute(async (req, res) => {
	const { username, password } = req.body;
	if (req.method === 'POST') {
		try {
			const response = await apiService.request({
				method: 'post',
				url: `api/auth/login`,
				data: { username, password }
			});

			const { uid, access_token, openid, scope, expires_in } = response?.data?.result || {};
			const pickAuth = { uid, access_token, openid, scope, expires_in };
			
			req.session.auth = pickAuth;
			req.session.lastActivity = Date.now();
			await req.session.save();
			res.status(200).json({ message: 'Logged In!', auth: pickAuth });

		} catch (error) {
			if (error?.response?.status === 404) {
				res.status(404).json({ message: 'Username atau Password Salah!', errors: ['Username atau Password Salah!'] });
			} else {
				res.status(error?.response?.status ?? 500).json(error?.response?.data ?? error);
			}
		}
	} else {
		res.status(405).json({ message: 'Method not allowed' });
	}
});
