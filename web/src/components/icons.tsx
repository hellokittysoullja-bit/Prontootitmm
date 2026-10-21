// Линейные иконки 24×24. Наследуют цвет текста.

type Props = { className?: string };

function Icon({ className = "size-5", children }: Props & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const LockIcon = (p: Props) => (
  <Icon {...p}>
    <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
    <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
  </Icon>
);

export const ReturnIcon = (p: Props) => (
  <Icon {...p}>
    <path d="M9 14L4.5 9.5 9 5" />
    <path d="M4.5 9.5H15a4.5 4.5 0 0 1 0 9h-3" />
  </Icon>
);

export const CardIcon = (p: Props) => (
  <Icon {...p}>
    <rect x="3.5" y="6" width="17" height="12" rx="2" />
    <path d="M3.5 10h17M7 14.5h3" />
  </Icon>
);

export const EyeOffIcon = (p: Props) => (
  <Icon {...p}>
    <path d="M4 4l16 16" />
    <path d="M10.6 6.1A9.7 9.7 0 0 1 12 6c5 0 8.5 6 8.5 6a15.6 15.6 0 0 1-2.6 3.2M6.3 7.8C4.6 9.3 3.5 12 3.5 12s3.5 6 8.5 6c1.3 0 2.5-.3 3.5-.8" />
    <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
  </Icon>
);

export const CloseIcon = (p: Props) => (
  <Icon {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Icon>
);

export const BellIcon = (p: Props) => (
  <Icon {...p}>
    <path d="M6.5 16.5V11a5.5 5.5 0 0 1 11 0v5.5l1.5 1.5h-14z" />
    <path d="M10 20.5a2 2 0 0 0 4 0" />
  </Icon>
);
