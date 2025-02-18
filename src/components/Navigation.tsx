
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Study Activities", path: "/study-activities" },
    { name: "Words", path: "/words" },
    { name: "Word Groups", path: "/groups" },
    { name: "Sessions", path: "/sessions" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b animate-nav-fade-in">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <h1 className="text-xl font-semibold text-primary">日本語</h1>
            <span className="text-sm text-muted-foreground">Learn</span>
          </div>
          <div className="flex items-center space-x-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "nav-link",
                  location.pathname === link.path && "active"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
