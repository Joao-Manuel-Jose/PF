import Image from 'next/image'

export function AgroClickLogo() {
  return (
    <Image
      className="pl-7 md:pl-0 md:my-auto md:h-[95px] md:w-[180px] md:pr-8"
      src="/logo.svg"
      alt="Kudika logo"
      width={129}
      height={3}
    />
  )
}
