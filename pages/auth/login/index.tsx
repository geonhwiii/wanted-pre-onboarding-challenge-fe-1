import Typography from '@/components/atomics/Typography';
import LoginForm from './components/LoginForm';

export default function Login() {
  return (
    <div className="w-96 mx-auto mt-24">
      <div className="text-center mb-6">
        <Typography className="text-3xl font-extrabold">로그인</Typography>
      </div>
      <LoginForm />
    </div>
  );
}
