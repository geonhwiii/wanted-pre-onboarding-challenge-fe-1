import Typography from '@/components/atomics/Typography';
import JoinForm from './components/JoinForm';

export default function Join() {
  return (
    <div className="w-96 mx-auto mt-24">
      <div className="text-center mb-6">
        <Typography className="text-3xl font-extrabold">회원가입</Typography>
      </div>
      <JoinForm />
    </div>
  );
}
