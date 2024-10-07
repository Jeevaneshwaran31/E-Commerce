export enum IconType {
  HomeIcon = "HomeIcon",
  CartIcon = "CartIcon",
  ProfileIcon = "ProfileIcon",
  HeartIcon = "HeartIcon",
  ArrowIcon = "ArrowIcon",
  EmptyCartIcon = "EmptyCartIcon",
  LeftArrowIcon = "LeftArrowIcon",
  CircleCheckIcon = "CircleCheckIcon",
}

const HomeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
      />
    </svg>
  );
};

const CartIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 hover:text-indigo-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
};

const ProfileIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 hover:text-indigo-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

const HeartIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 hover:text-indigo-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
};

const ArrowIcon = () => {
  return (
    <svg
      className="h-7 w-7 ml-2 mt-1 text-slate-100"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
};

const EmptyCartIcon = () => {
  return (
    <svg
      className="h-48 w-48 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
};

const LeftArrowIcon = () => {
  return (
    <svg
      className="h-8 w-8 text-slate-100"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <line x1="5" y1="12" x2="19" y2="12" />
      <line x1="5" y1="12" x2="9" y2="16" />
      <line x1="5" y1="12" x2="9" y2="8" />
    </svg>
  );
};

const CircleCheckIcon = () => {
  return (
    <svg
      className="h-20 w-24 text-green-500"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <circle cx="12" cy="12" r="9" /> <path d="M9 12l2 2l4 -4" />
    </svg>
  );
};

export const Icons = ({ type }: { type: IconType }) => {
  switch (type) {
    case IconType.HomeIcon:
      return <HomeIcon />;
    case IconType.CartIcon:
      return <CartIcon />;
    case IconType.ProfileIcon:
      return <ProfileIcon />;
    case IconType.HeartIcon:
      return <HeartIcon />;
    case IconType.ArrowIcon:
      return <ArrowIcon />;
    case IconType.EmptyCartIcon:
      return <EmptyCartIcon />;
    case IconType.LeftArrowIcon:
      return <LeftArrowIcon />;
    case IconType.CircleCheckIcon:
      return <CircleCheckIcon />;
  }
};
