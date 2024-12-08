import Image from "next/image";
import notificationIcon from "@/app/icons/notification.svg";
import messageIcon from "@/app/icons/message.svg";
import searchIcon from "@/app/icons/search.svg";

export function Header() {
  return (
    <header className="py-6 px-16 border-b-[1px] border-gray-300">
      <ul className="flex gap-9 justify-end">
        <li>
          <Image
            src={notificationIcon}
            width={24}
            height={24}
            alt="notificações"
          />
        </li>
        <li>
          <Image 
            src={messageIcon} 
            width={24} 
            height={24} 
            alt="mensagens" 
          />
        </li>
        <li>
          <div className="flex gap-2 w-[100px]">
            <Image
              src={searchIcon}
              width={24}
              height={24}
              alt="pesquisa"
            />
            <input className="w-[80px] outline-0" type="text" placeholder="Procurar" />
          </div>
        </li>
      </ul>
    </header>
  );
}
