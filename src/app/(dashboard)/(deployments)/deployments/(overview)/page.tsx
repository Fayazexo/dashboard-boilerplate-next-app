import React from 'react';
import { cn } from '@/utils/classNames';
import { UserIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
const stats = [
  { name: 'Number of deploys', value: '405' },
  { name: 'Average deploy time', value: '3.65', unit: 'mins' },
  { name: 'Number of servers', value: '3' },
  { name: 'Success rate', value: '98.5%' },
];
const statuses: Record<string, string> = {
  Completed: 'text-green-400 bg-green-400/10',
  Error: 'text-rose-400 bg-rose-400/10',
};
const activityItems = [
  {
    user: {
      name: 'Fayaze H. Pantho',
      imageUrl: '/avatars/fayaze.jpg',
      icon: UserIcon,
    },
    commit: '2d89f0c8',
    branch: 'main',
    status: 'Completed',
    duration: '25s',
    date: '45 minutes ago',
    dateTime: '2023-01-23T11:00',
  },
];
export default function DeploymentOverviewPage() {
  return (
    <div>
      <div className="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-700/10 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>
          <div className="flex items-center gap-x-3">
            <div className="flex-none rounded-full bg-green-400/10 p-1 text-green-400">
              <div className="h-2 w-2 rounded-full bg-current" />
            </div>
            <h1 className="flex gap-x-3 text-base leading-7">
              <span className="font-semibold text-white">
                Harkara Dashboard
              </span>
              <span className="text-gray-600">/</span>
              <span className="font-semibold text-white">Web App</span>
            </h1>
          </div>
          <p className="mt-2 text-xs leading-6 text-gray-400">
            Deploys from GitHub via main branch
          </p>
        </div>
        <div className="order-first flex-none rounded-full bg-brand/10 px-2 py-1 text-xs font-medium text-brand ring-1 ring-inset ring-brand/30 sm:order-none">
          Production
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 bg-gray-700/10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, statIdx) => (
          <div
            key={stat.name}
            className={cn(
              statIdx % 2 === 1
                ? 'sm:border-l'
                : statIdx === 2
                ? 'lg:border-l'
                : '',
              'border-t border-white/5 py-6 px-4 sm:px-6 lg:px-8',
            )}
          >
            <p className="text-sm font-medium leading-6 text-gray-400">
              {stat.name}
            </p>
            <p className="mt-2 flex items-baseline gap-x-2">
              <span className="text-4xl font-semibold tracking-tight text-white">
                {stat.value}
              </span>
              {stat.unit ? (
                <span className="text-sm text-gray-400">{stat.unit}</span>
              ) : null}
            </p>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 pt-11">
        <h2 className="px-4 text-base font-semibold leading-7 text-white sm:px-6 lg:px-8">
          Latest activity
        </h2>
        <table className="mt-6 w-full whitespace-nowrap text-left">
          <colgroup>
            <col className="w-full sm:w-4/12" />
            <col className="lg:w-4/12" />
            <col className="lg:w-2/12" />
            <col className="lg:w-1/12" />
            <col className="lg:w-1/12" />
          </colgroup>
          <thead className="border-b border-white/10 text-sm leading-6 text-white">
            <tr>
              <th
                scope="col"
                className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8"
              >
                User
              </th>
              <th
                scope="col"
                className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell"
              >
                Commit
              </th>
              <th
                scope="col"
                className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20"
              >
                Status
              </th>
              <th
                scope="col"
                className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20"
              >
                Duration
              </th>
              <th
                scope="col"
                className="hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8"
              >
                Deployed at
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {activityItems.map(item => (
              <tr key={item.commit}>
                <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={item.user.imageUrl}
                      alt="User"
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full bg-gray-800"
                    />
                    <div className="truncate text-sm font-medium leading-6 text-white">
                      {item.user.name}
                    </div>
                  </div>
                </td>
                <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                  <div className="flex gap-x-3">
                    <div className="font-mono text-sm leading-6 text-gray-400">
                      {item.commit}
                    </div>
                    <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">
                      {item.branch}
                    </span>
                  </div>
                </td>
                <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                  <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                    <time
                      className="text-gray-400 sm:hidden"
                      dateTime={item.dateTime}
                    >
                      {item.date}
                    </time>
                    <div
                      className={cn(
                        statuses[item.status],
                        'flex-none rounded-full p-1',
                      )}
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-current" />
                    </div>
                    <div className="hidden text-white sm:block">
                      {item.status}
                    </div>
                  </div>
                </td>
                <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20">
                  {item.duration}
                </td>
                <td className="hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
                  <time dateTime={item.dateTime}>{item.date}</time>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
