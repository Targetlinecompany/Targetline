import { cn } from '@/utils/cn';

export function HeartHandshakeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      stroke='currentColor'
      fill='none'
      strokeWidth='2'
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572'></path>
      <path d='M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25'></path>
      <path d='M12.5 15.5l2 2'></path>
      <path d='M15 13l2 2'></path>
    </svg>
  );
}

export function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 320 512'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'></path>
    </svg>
  );
}

export function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 1024 1024'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z'></path>
    </svg>
  );
}

export function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 448 512'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z'></path>
    </svg>
  );
}

export function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='1em'
      viewBox='0 0 512 512'
      stroke='currentColor'
      fill='currentColor'
      {...props}
    >
      <path d='M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z' />
    </svg>
  );
}

export function ChevronDownMiniIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
    >
      <path
        fillRule='evenodd'
        d='M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z'
        clipRule='evenodd'
      />
    </svg>
  );
}

export function PiDollarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 256 256'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M204,168a52.06,52.06,0,0,1-52,52H140v12a12,12,0,0,1-24,0V220H104a52.06,52.06,0,0,1-52-52,12,12,0,0,1,24,0,28,28,0,0,0,28,28h48a28,28,0,0,0,0-56H112a52,52,0,0,1,0-104h4V24a12,12,0,0,1,24,0V36h4a52.06,52.06,0,0,1,52,52,12,12,0,0,1-24,0,28,28,0,0,0-28-28H112a28,28,0,0,0,0,56h40A52.06,52.06,0,0,1,204,168Z' />
    </svg>
  );
}

export function PhoneSolidIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
    >
      <path
        fillRule='evenodd'
        d='M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z'
        clipRule='evenodd'
      />
    </svg>
  );
}

export function SpinnerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      {...props}
    >
      <circle
        className='opacity-25 '
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='4'
      ></circle>
      <path
        className='opacity-75 '
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
      ></path>
    </svg>
  );
}

export function ChevronIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
      {...props}
    >
      <path
        fillRule='evenodd'
        d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z'
        clipRule='evenodd'
      />
    </svg>
  );
}

export function ArrowUpRightMiniIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
      {...props}
    >
      <path
        fillRule='evenodd'
        d='M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z'
        clipRule='evenodd'
      />
    </svg>
  );
}

export function SmileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'></path>
      <path d='M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z'></path>
    </svg>
  );
}

export function HandHeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 256 256'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M229.12,142.65a22.43,22.43,0,0,0-19.55-3.88l-4.32,1C227,119.55,238,99.51,238,80c0-25.36-20.39-46-45.46-46A45.51,45.51,0,0,0,156,52a45.51,45.51,0,0,0-36.54-18C94.39,34,74,54.64,74,80c0,11.38,3.63,22.49,11.29,34.36a29.73,29.73,0,0,0-16.56,8.43L45.52,146H16A14,14,0,0,0,2,160v40a14,14,0,0,0,14,14H120a6,6,0,0,0,1.46-.18l64-16a7.16,7.16,0,0,0,.89-.3L225.17,181l.33-.15a22.6,22.6,0,0,0,3.62-38.18ZM119.46,46a33.16,33.16,0,0,1,31,20.28,6,6,0,0,0,11.1,0,33.16,33.16,0,0,1,31-20.28C210.68,46,226,61.57,226,80c0,20.24-16.18,43-46.8,65.75l-14.87,3.42A26,26,0,0,0,140,114H99.67C90.36,101.67,86,90.81,86,80,86,61.57,101.32,46,119.46,46ZM14,200V160a2,2,0,0,1,2-2H42v44H16A2,2,0,0,1,14,200Zm206.28-30-38.2,16.27L119.26,202H54V154.49l23.21-23.22A17.88,17.88,0,0,1,89.94,126H140a14,14,0,0,1,0,28H112a6,6,0,0,0,0,12h32a6,6,0,0,0,1.34-.15l67-15.41.24-.06A10.6,10.6,0,0,1,220.28,170Z'></path>
    </svg>
  );
}

export function HandHoldingHeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M 14.5 3 C 12.567 3 11 4.567 11 6.5 C 11 10 17 13 17 13 C 17 13 23 10 23 6.5 C 23 4.567 21.433 3 19.5 3 C 18.519 3 17.635 3.4066406 17 4.0566406 C 16.365 3.4066406 15.481 3 14.5 3 z M 14.5 5 C 14.904 5 15.284313 5.160125 15.570312 5.453125 L 16.103516 6 L 17.896484 6 L 18.429688 5.453125 C 18.715688 5.160125 19.096 5 19.5 5 C 20.327 5 21 5.673 21 6.5 C 21 7.761 18.894 9.5758438 17 10.714844 C 15.105 9.5748437 13 7.761 13 6.5 C 13 5.673 13.673 5 14.5 5 z M 19.21875 13.978516 L 17.582031 15.126953 L 20.191406 18.849609 L 16.589844 21.34375 L 14.046875 20.027344 C 15.221946 19.435735 16.740633 18.671002 16.746094 18.667969 L 16.757812 18.660156 L 16.767578 18.654297 C 17.73002 18.08786 18.223142 16.919812 17.902344 15.808594 L 17.902344 15.806641 C 17.522685 14.49269 16.123178 13.720962 14.808594 14.099609 L 14.806641 14.099609 L 7.6953125 16.082031 L 2.9882812 19.316406 L 4.8828125 27.037109 L 9.9277344 25.214844 L 17.074219 28.914062 L 28.943359 20.697266 L 27.806641 19.052734 L 16.925781 26.585938 L 10.072266 23.035156 L 6.2949219 24.400391 L 5.2617188 20.183594 L 8.5546875 17.917969 L 15.357422 16.021484 L 15.361328 16.021484 C 15.638162 15.941494 15.900321 16.085904 15.980469 16.363281 C 16.047189 16.594407 15.942859 16.815375 15.755859 16.927734 C 15.723219 16.944614 13.072686 18.278992 11.398438 19.121094 L 9.6484375 20 L 16.740234 23.673828 L 22.984375 19.349609 L 19.21875 13.978516 z'></path>
    </svg>
  );
}

export function HandAndHeartHolding(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 576 512'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z'></path>
    </svg>
  );
}

export function DotIcon({ height, width }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 2 2'
      className={cn('-ml-0.5 flex-none fill-white/50', height, width)}
    >
      <circle cx={1} cy={1} r={1} />
    </svg>
  );
}

export function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
      aria-hidden='true'
      {...props}
    >
      <path
        fillRule='evenodd'
        d='M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
}

export function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 448 512'
      fill='#4B5563'
      {...props}
    >
      <path d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z'></path>
    </svg>
  );
}

export function SendIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='m22 2-7 20-4-9-9-4Z' />
      <path d='M22 2 11 13' />
    </svg>
  );
}

export function MessageCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M7.9 20A9 9 0 1 0 4 16.1L2 22Z'></path>
    </svg>
  );
}

export function HeartRoundedIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'></path>
    </svg>
  );
}
