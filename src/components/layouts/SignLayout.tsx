import { ReactElement } from "react";

export const SignLayout = (page: ReactElement) => {
  return (
    <article className="h-[100vh] bg-yellow-500 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-md container max-w-lg p-10">
        {page}
      </div>
    </article>
  );
};
