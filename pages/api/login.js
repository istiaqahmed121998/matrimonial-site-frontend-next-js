import { withSessionRoute } from "../../lib/session";
import axios from "../../component/api/axios";
async function loginRoute(req, res) {
  const { email, password } = await req.body;
  try {
    const response = await axios.post("/auth", { email, password });
    const { admin, full_name, member_id } = response.data.data.user;
    const userinfo = {
      admin,
      full_name,
      member_id,
    };
    const user = {
      isLoggedIn: true,
      token: response.data.data.token,
      userinfo,
    };
    req.session.user = user;
    await req.session.save();

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default withSessionRoute(loginRoute);
