import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Icon, Tooltip } from '@nooota/ui'
import { classNames } from '@nooota/utils';

export function Navigation() {
  const { pathname } = useLocation()

  const matchHomeRoute = pathname.endsWith('/home')
  const businessRoute = pathname.endsWith('/business')

  return (
    <div className="w-16 h-screen dark:bg-neutral-650 bg-white flex flex-col">
      <Link
        to={'/home'}
        className="flex w-16 h-[60px] items-center justify-center border-b z-10 dark:border-neutral-500 border-neutral-200"
      >
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
      </Link>

      <div className="flex flex-col justify-between px-2.5 py-5 flex-grow">
        <div className="flex flex-col gap-3">
          <Tooltip content="Accueil" side="right">
            <Link
              to="/home"
              className={classNames(
                'flex rounded-md p-3 mx-auto dark:hover:text-gray-100 hover:bg-neutral-200 dark:hover:bg-indigo-500 hover:text-brand-500 ease-in-out duration-200 dark:text-gray-400 ',
                matchHomeRoute
                  ? 'bg-neutral-200 !text-brand-500 dark:bg-indigo-500'
                  : 'text-gray-400'
              )}
            >
              <Icon name={"mingcute:home-4-fill"} className={classNames('w-5')} />
            </Link>
          </Tooltip>

          <Tooltip content="Commercial" side="right">
            <Link
              to="/business"
              className={classNames(
                'flex rounded-md p-3 mx-auto dark:hover:text-gray-100 hover:bg-neutral-200 dark:hover:bg-indigo-500 hover:text-brand-500 ease-in-out duration-200 dark:text-gray-400 ',
                businessRoute
                  ? 'bg-neutral-200 !text-brand-500 dark:bg-indigo-500'
                  : 'text-gray-400'
              )}
            >
              <Icon name={"ic:round-business-center"} className={classNames('w-5')} />
            </Link>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
