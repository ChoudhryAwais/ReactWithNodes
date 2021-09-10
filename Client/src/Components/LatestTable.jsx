import React, { useMemo, useEffect, useState } from "react";
import { useTable } from "react-table";
import Table from "./Table";
import { columns } from "./columns";
import axios from "axios";
import makeData from "./makedata";

const dummyModal = {
  accountNum: "",
  claimType: "P",
  entryDateFrom: "",
  entryDateTo: "",
  insuranceType: "P",
  locationID: null,
  locationSetup: false,
  pageNo: 1,
  payerID: "",
  perPage: 1000,
  planName: "",
  practice: "",
  provider: "",
  providerID: null,
  receiverID: "1",
  status: "",
  totalCount1: 0,
  totalCount2: 0,
  totalRows: 0,
  validationMsg: "",
  visitID: null,
  visitType: "",
};

const config = {
  headers: {
    Authorization:
      "Bearer  " +
      "dFZhMTViZFJ1NUdMUld0azJxTFNVSU40bGlmWXZXVzhISGNCRmU4alJvZkxJakloWEhUT0hXdWZURjBIMDR1K0FGQkgyY3ZJRlV3RlJva2dmMWgxNy81Sms0MlZVM25Hd2pvWnlSenRjTDFGN3I5OUVEYzQwanFkQVZhb1E1dWpZdXIrVkdMSHRQK05adE1BQUhEaWt4Wldxcjg2TXRWdGR3UG1HR3BKZnVoWkxjaDRINGZQZ3psdWxRK1dZdkdDL2xZRDQ1S013MUFPQUx4Ty9iV1V5clprc3ZHSGJISU85bDRub3ZQZERWdENFajBJamFyNmRvb2M2NlZqM3FGaVU3aUJnTUZheTRIUXpQZDh1am14dkY1VzloaXBqeU50L05tT0xlM1k1NmdqRTlCa2tLRmk1dEg3dzZxYVVlNXhrdHpzbTVqaDVkUXo3SE9mTk45TUdCbE5uSk1kVHIwcHhHRlpGTFdMeVplNkJyUldZMnVGYit0cUlzQnJnTk1Rd0J3MXlhYkFCY3B2Mm14OU9jTTMyZ2IrM2o0NTNJaGpJTFhpTkVvUU1HckdsS1VHSERkQTZQT29nSXloV04vU2QxNy9RSHJwaEhDZU5taU5QeHB4SGhjek9rOU5NUGRuc1RBRHZJRHhPd2dxRFJxRlVHMTROSGI3Z1loN2JKams3cWQwNDB6akM2cTlvL293VDhZQUlERDlFNUpMRnYxUzJVbUhZU1pvRWxKSVZmOFBJajE1cCtOVWo2d1p1Slc1SDNaRnR3dkRlRVZXSWIyUzRDSGE1SVIvVCszdVNpeDNEd040VG1WUmtoaTlCOXY4WmMvKzkrYWdMYzlHK1lqNStKMWp2MmVMTStPQTBZVkxCK21MTHc9PQ==",
    Accept: "*/*",
  },
};

export const LatestTable = () => {
  const columns = [
    {
      // Make an expander cell
      Header: () => null, // No header
      id: "expander", // It needs an ID
      Cell: ({ row }) => (
        // Use Cell to render an expander for each row.
        // We can use the getToggleRowExpandedProps prop-getter
        // to build the expander.
        <span {...row.getToggleRowExpandedProps()}>
          {row.isExpanded ? "⬇" : "➡"}
        </span>
      ),
    },
    {
      Header: "First Name",
      accessor: "firstName",
    },
    {
      Header: "Last Name",
      accessor: "lastName",
    },
    {
      Header: "Age",
      accessor: "age",
    },
    {
      Header: "Visits",
      accessor: "visits",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Profile Progress",
      accessor: "progress",
    },
  ];

  // const [jokedata, setjokedata] = useState([]);
  // useEffect(() => {
  //     axios.post('http://192.168.100.209:8035/api/ElectronicSubmission/FindVisits2',dummyModal,config).then(
  //         (response) =>{
  //             setjokedata(response.data.data)
  //         }
  //     )
  //     .catch((error)=>{
  //         console.log('====================================');
  //         console.log(error);
  //         console.log('====================================');
  //     })

  // }, []);

  const column = useMemo(() => columns, []);
  const data = useMemo(() => makeData(20, 5), []);

  return <Table columns={column} data={data} />;
};
