import Typography from '@/components/atomics/Typography';
import LoginForm from './components/LoginForm';

export default function Login() {
  return (
    <div className="mx-auto mt-24 w-96">
      <div className="mb-6 text-center">
        <Typography className="text-3xl font-extrabold text-gray-200">로그인</Typography>
      </div>
      <LoginForm />
    </div>
  );
}
