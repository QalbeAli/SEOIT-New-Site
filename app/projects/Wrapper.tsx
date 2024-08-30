import { PropsWithChildren } from "react";
import cx from "classnames";

interface Props extends PropsWithChildren {
  className?: string;
}

const Wrapper = ({ children, className }: Props) => {
  return (
    <div
      className={cx(
        "md:mx-auto md:max-w-screen-xl lg:max-w-screen-xl px-4 lg:px-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
