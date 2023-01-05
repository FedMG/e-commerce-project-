import Link from "next/link";

const links = [
  {
    id: 1,
    title: "Policy",
    column: [
      { route: "Privacy Policy", path: "/privacy-policy" },
      { route: "Terms of Service", path: "/terms-of-service" },
      { route: "Consumer Rights", path: "/consumer-rights" },
    ],
  },
  {
    id: 2,
    title: "Support",
    column: [
      { route: "Contact Us", path: "/contact-us" },
      { route: "Forum", path: "/forum" },
      { route: "Common questions", path: "/common-questions" },
    ],
  },
  {
    id: 3,
    title: "Social Networks",
    column: [
      { route: "Instagram", path: "/instagram/ecommerce" },
      { route: "Twitter", path: "/twitter/ecommerce" },
      { route: "Facebook", path: "/facebook/ecommerce" },
    ],
  },
];

interface AnchorProps {
  path: string;
  route: string;
}

const Anchor: React.FC<AnchorProps> = ({ path, route }) => (
  <a
    href={path}
    className="text-white hover:text-gray-400"
    target="_blank"
    rel="noreferrer"
  >
    {route}
  </a>
);

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <p>&copy; 2023 e-commerce</p>
          </div>
          <div className="flex flex-row sm:space-x-6">
            {links.map(({ id, title, column }) => (
              <div key={id}>
                <h4>{title}</h4>
                <div className="flex flex-col">
                  {column.map(({ route, path }) => {
                    if (title !== "Social Networks") {
                      return (
                        <Link
                          key={route}
                          href={path}
                          className="text-white hover:text-gray-400"
                        >
                          {route}
                        </Link>
                      );
                    }
                    return <Anchor key={route} path={path} route={route} />;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
