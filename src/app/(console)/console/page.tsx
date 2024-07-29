'use client'
import Widget from "@/components/atoms/a-widget";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { IoDocuments } from 'react-icons/io5';
import { MdBarChart } from 'react-icons/md';
import CheckTable from '@/components/table/docTable'
import docData from '@/components/data/docData'
import TotalUpload from '@/components/default/TotalUpload'
import WeeklyRevenue from '@/components/default/WeeklyRevenue'

const ConsoleDashboardPage = () => {
  return (
	  <div>
		  <h1 className='text-3xl text-primary font-semibold'>Dashboard</h1>
      {/* Card widget */}

      <div className="p-5 mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<RiGitRepositoryPrivateLine  className="h-7 w-7" />}
          title={"Total private Doc"}
          subtitle={"340,890"}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Total public Doc"}
          subtitle={"345,098"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Sales"}
          subtitle={"$574.34"}
        />
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalUpload />
        <WeeklyRevenue />
      </div>
		  <div>
			  <CheckTable tableData={docData}/>
		  </div>
    </div>
  );
};

export default ConsoleDashboardPage;
