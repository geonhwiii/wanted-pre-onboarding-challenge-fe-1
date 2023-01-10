import Typography from '@/components/atomics/Typography';
import JoinForm from './components/JoinForm';

export default function Join() {
  return (
    <div className="mx-auto mt-24 w-96">
      <div className="mb-6 text-center">
        <Typography className="text-3xl font-extrabold text-gray-200">회원가입</Typography>
      </div>
      <JoinForm />
    </div>
  );
}
