import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SelectDropDown from "../../components/selectDropDown/SelectDropDown";
import useFetch from "../../hooks/useFetch";
import Datepicker from "react-tailwindcss-datepicker";
import useGet from "../../hooks/useFetc";
import Table from "../../components/tableComponent/Table";
import moment from "moment";
import Filter from "./filter";

const LeadsPage = () => {
  const [body, setBody] = useState({
    search: "",
    lead_status_id: [],
    source_id: [],
    user_id: [],
    contacted_date_from: "",
    contacted_date_to: "",
  });
  const [searchName, setSearchName] = useState("");

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const [leads, setLeads, LeadsLoading] = useGet({
    page: page,
    pageSize: pageSize,
    body: body,
  });

  const [status, statusLoading] = useFetch("base/lead-status");
  const [sources, sourcesLoading] = useFetch("base/source");
  const [assignees, assigneesLoading] = useFetch("base/assignee");

  if (LeadsLoading || statusLoading || sourcesLoading || assigneesLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <h2 className="text-3xl">Loading....</h2>
      </div>
    );
  }

  const handleFilterLeads = (data) => {
    setLeads(data);
  };

  const handleNameChange = (event) => {
    setSearchName(event.target.value);
    body.search = searchName;
  };

  const handleStatus = (event) => {
    body.lead_status_id = [event.target.value];
  };
  const handleSources = (event) => {
    body.source_id = [event.target.value];
  };
  const handleAssignees = (event) => {
    body.user_id = [event.target.value];
  };

  const handleValueChange = (newValue) => {
    body.contacted_date_from = moment(newValue.startDate).format(
      "YYYY-MM-DDTHH:mm:ss[Z]"
    );
    body.contacted_date_to = moment(newValue.endDate).format(
      "YYYY-MM-DDTHH:mm:ss[Z]"
    );
    setBody(body);
    setValue(newValue);
  };

  // Page Filter

  const handlePageSize = (event) => {
    setPageSize(event.target.value);
  };

  const handelPageBack = () => {
    if (page > 0) setPage(page - 1);
  };
  const handelPageNext = () => {
    setPage(page + 1);
  };

  return (
    <div className="">
      <NavBar handleNameChange={handleNameChange} />

      <div className="py-10 pl-5 flex gap-3">
        <SelectDropDown name="Statuses" data={status} handle={handleStatus} />
        <SelectDropDown name="Sources" data={sources} handle={handleSources} />
        <SelectDropDown
          name="Assignees"
          user={true}
          data={assignees}
          handle={handleAssignees}
        />
        <div className="bg-white border-2 ">
          <Datepicker
            classNames={"outline-none"}
            primaryColor={"white"}
            value={value}
            onChange={handleValueChange}
          />
        </div>

        <Filter
          page={page}
          pageSize={pageSize}
          body={body}
          handleFilterLeads={handleFilterLeads}
        />
      </div>
      <div>
        <Table data={leads} />
      </div>

      <div className="w-[83%] absolute bottom-0 bg-slate-100 bottom-0 flex justify-end p-4 gap-6 ">
        <div>
          <input
            onBlur={handlePageSize}
            type="number"
            min="0"
            placeholder="Page Size"
            className="input input-bordered w-[115px] input-sm"
            defaultValue={pageSize}
          />
        </div>
        <div className="flex gap-4 ">
          <button onClick={handelPageBack} className="btn btn-sm btn-outline">
            {"<"}
          </button>
          <h2 className="flex items-center text-xl font-semibold">{page}</h2>
          <button onClick={handelPageNext} className="btn btn-sm btn-outline">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadsPage;
