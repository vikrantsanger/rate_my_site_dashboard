// app/(dashboard)/page.tsx

import Image from 'next/image';

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Image
        src="/logo.png"
        alt="logo"
        width={250}
        height={250}
        className="w-2xs"
      />
      <h1 className="text-2xl font-semibold">Dashboard</h1>
    </div>
  );
}
