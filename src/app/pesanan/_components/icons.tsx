import type { SVGProps } from "react";

export function ShoppingCartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={24}
      height={24}
      {...props}
    >
      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.17 14h9.66c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0019.34 5H6.21l-.94-2H1v2h2l3.6 7.59L5.25 14.04c-.31.54-.12 1.23.42 1.54.17.1.36.15.55.15h12.78v-2H7.42l.75-1.23z" />
    </svg>
  );
}

export function ReceiptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={24}
      height={24}
      {...props}
    >
      <path d="M19 21l-2-1-2 1-2-1-2 1-2-1-2 1V3l2-1 2 1 2-1 2 1 2-1 2 1v18zM8 7h8V5H8v2zm0 4h8V9H8v2zm0 4h6v-2H8v2z" />
    </svg>
  );
}

export function InfoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={20}
      height={20}
      {...props}
    >
      <path d="M11 7h2V9h-2z" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6z" />
    </svg>
  );
}

export function ChevronLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={20}
      height={20}
      {...props}
    >
      <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  );
}

export function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={20}
      height={20}
      {...props}
    >
      <path d="m8.59 16.59 1.41 1.41L16 12l-6-6-1.41 1.41L13.17 12z" />
    </svg>
  );
}
