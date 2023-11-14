import Image from "next/image";
import Link from "next/link";

interface RowProps {
  name: string;
  route: string;
}
export default function Home() {
  const rows: RowProps[] = [
    { name: "Expanding Cards", route: "/expanding-cards" },
    { name: "Progress Steps", route: "/progress-steps" },
    {
      name: "Rotating Navigation Animation",
      route: "/rotating-navigation-animation",
    },
    { name: "Hidden Search Widget", route: "/hidden-search-widget" },
    { name: "Blurry loading", route: "/blurry-loading" },
    { name: "Scroll animation", route: "/scroll-animation" },
    { name: "Split landing page", route: "/split-landing-page" },
    { name: "Dad jokes", route: "/dad-jokes" },
    { name: "Event keycodes", route: "/event-keycodes" },
  ];
  return (
    <div className="mt-24 w-[90vw] mx-auto flex flex-col">
      <div className="-m-1.5 overflow-x-auto flex justify-center items-center p-1.5">
        <div className="border rounded-lg shadow overflow-scroll">
          <table className="w-[60vw] divide-y divide-gray-200 ">
            <thead className="bg-gray-50 ">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  S.no
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                >
                  Link
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rows.map((row, index) => {
                return (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      {row.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        className="text-blue-500 hover:text-blue-700"
                        href={row.route}
                      >
                        Demo
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
