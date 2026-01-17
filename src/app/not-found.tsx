import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-20">
      <div className="card">
        <p className="text-sm font-medium text-muted">404</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-muted">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link className="btn btn-primary" href="/">
            Back home
          </Link>
          <Link className="btn btn-secondary" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </Container>
  );
}

