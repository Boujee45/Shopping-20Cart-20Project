import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { ArrowLeft } from "lucide-react";

export default function ProductDetail() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-primary hover:underline mb-8 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <div className="text-center py-16">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Product Details
          </h1>
          <p className="text-muted-foreground mb-8">
            This page will display detailed information about individual
            products.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90"
          >
            Back to Shop
          </button>
        </div>
      </div>
    </div>
  );
}
