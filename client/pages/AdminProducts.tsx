import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';

export default function AdminProducts() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-8">Admin Panel</h1>

        <div className="bg-muted/50 border border-border rounded-xl p-12 text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Product Management</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            This page will contain tools for admins to add, update, and delete products, as well as manage categories and view orders.
          </p>

          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Back to Shop
          </button>
        </div>
      </div>
    </div>
  );
}
