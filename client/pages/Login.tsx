import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-border rounded-xl p-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Sign In</h1>
          <p className="text-muted-foreground mb-8">
            This page will contain user login and registration forms.
          </p>

          <button
            onClick={() => navigate('/')}
            className="w-full px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Back to Shop
          </button>
        </div>
      </div>
    </div>
  );
}
