import Image from 'next/image'
import notificationIcon from '@/app/icons/notification.svg'

export function Header() {
  return (
    <header>
      <ul>
        <li>
          <Image 
            src={notificationIcon} 
            width={24} 
            height={24} 
            alt='notifications' 
          />
        </li>
      </ul>
    </header>
  );
}
