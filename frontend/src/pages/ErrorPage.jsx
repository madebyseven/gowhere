import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  //   console.error(error);

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("");
  };

  return (
    <div id="error-page">
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse grid-cols-1  md:gap-8 gap-16">
        <div className="xl:pt-8 w-full relative pb-12 lg:pb-0">
          <div className="relative flex justify-center items-center">
            <div className="absolute">
              <div className="">
                <h1 className="my-2 text-gray-800 font-bold text-3xl">
                  Oops! Page {error.statusText || error.message}
                </h1>
                {/* <h2 className="my-2 text-gray-800 font-bold text-2xl">
                  Looks like you've found the doorway to the great nothing
                </h2> */}
                <p className="my-2 text-gray-800">
                  Sorry about that! Please visit our hompage to get where you
                  need to go.
                </p>
                <button
                  className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95"
                  onClick={navigateHome}
                >
                  Take me there!
                </button>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div>
      </div>
    </div>
  );
}
