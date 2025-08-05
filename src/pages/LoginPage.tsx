import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LoginForm from "../components/auth/LoginForm";
import Card, {
  CardContent,
  CardHeader,
  CardFooter,
} from "../components/ui/Card";
import { Package } from "lucide-react";

const LoginPage: React.FC = () => (
  <motion.div
    className="w-full max-w-md"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <Card>
      <CardHeader className="text-center">
        <Link to="/">
          <Package className="mx-auto mb-4 w-12 h-12 text-emerald-600" />
        </Link>
        <h1 className="text-3xl font-bold">Welcome Back</h1>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter>
        <p className="w-full text-center">
          Don't have an account?{" "}
          <Link to="/register" className="font-semibold text-emerald-600">
            Register
          </Link>
        </p>
      </CardFooter>
    </Card>
  </motion.div>
);
export default LoginPage;
