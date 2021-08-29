import React, { useEffect, useState } from "react";
import Link from "next/link";
import { createUseStyles } from "react-jss";
import _ from "underscore";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://cooltix-frontend-challenge.herokuapp.com",
  cache: new InMemoryCache(),
});

const useStyles = createUseStyles({
  main: {
    margin: "20px auto 50px",
    "& h2": {
      fontSize: "24px",
      lineHeight: "28px",
      fontWeight: "700",
    },
  },
  members: {
    display: "flex",
    alignItems: "flex-start",
  },
  resultFilter: {
    flex: "3",
    border: "1px solid #e5e5e5",
    borderRadius: "4px",
    padding: "24px 27px 24px 27px",
    marginRight: "16px",
  },
  resultFilterHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
    "& h3": {
      fontSize: "20px",
      lineHeight: "24px",
      color: "#00A4FF",
      fontWeight: "700",
      margin: "0",
    },
    "& .check_all:hover": {
      color: "#00A4FF",
      cursor: "pointer",
    },
  },
  filterCheckboxes: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "574px",
    overflowY: "auto",
  },
  filterCheckbox: {
    marginBottom: "8px",
    "& input": {
      border: "1px solid #4A4A4A",
      marginRight: "8px",
    },
    "&:hover": {
      color: "#00A4FF",
      cursor: "pointer",
    },
  },
  resultListing: {
    flex: "9",
    "@media (max-width: 868px)": {
      flex: "6",
    },
  },
  resultInfoBar: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #e5e5e5",
    borderRadius: "4px",
    marginBottom: "16px",
    marginRight: "10px",
    padding: "0 16px",
    "@media (max-width: 868px)": {
      flexDirection: "column",
    },
  },
  resultCounter: {},
  searchBarHolder: {
    position: "relative",
  },
  searchBar: {
    height: "28px",
    borderRadius: "25px",
    border: "1px solid #b0b0b0",
    textAlign: "center",

    "&:focus": {
      outline: "none",
    },
  },
  searchBarIcon: {
    position: "absolute",
    left: "10px",
    top: "8px",
  },
  resultOrder: {
    fontSize: "14px",
    height: "auto",
    padding: "5px",
    borderRadius: "4px",
    border: "none",

    "&:focus": {
      outline: "1px solid #e5e5e5",
    },
  },
  resultMemberList: {
    display: "flex",
    borderRadius: "4px",
    flexWrap: "wrap",
    maxHeight: "600px",
    overflowY: "auto",
    "@media (max-width: 868px)": {
      justifyContent: "center",
    },
  },
  resultMember: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #e5e5e5",
    padding: "40px",
    textAlign: "center",
    flexBasis: "192px",
    minHeight: "210px",
    maxWidth: "192px",
    marginBottom: "16px",
    marginRight: "16px",
    textDecoration: "none",
    color: "#222D39",
    "@media (min-width: 1280px)": {
      "&:nth-child(3n+0)": {
        marginRight: "0",
      },
    },
    "& img": {
      borderRadius: "42px",
    },
    "&:hover": {
      backgroundColor: "#00A4FF",
      border: "1px solid #00A4FF",
      color: "white",
      cursor: "pointer",
    },
    "& .member_name": {
      fontWeight: "700",
      margin: "12px 0 0",
      fontSize: "20px",
      lineHeight: "26px",
    },
    "& .member_address_state": {
      fontWeight: "400",
      margin: "12px 0 0",
      fontSize: "16px",
      lineHeight: "24px",
    },
    "& .member_address_street": {
      fontWeight: "400",
      margin: "12px 0 0",
      fontSize: "12px",
      lineHeight: "16px",
    },
  },
  nomatch: {
    width: "100%",
    textAlign: "center",
  },
  unloaded: {
    filter: "blur(1px)",
  },
  unloadedBar: {
    width: "176px",
    height: "16px",
    borderRadius: "32px",
    backgroundColor: "#d8d8d8",
  },
  unloadedBarSmall: {
    width: "113px",
    height: "12px",
    borderRadius: "32px",
    backgroundColor: "#d8d8d8",
  },
});

const Main = (props) => {
  const [searchprops, setSearchProps] = useState(["firstName", "lastName"]);
  const [loading, setLoading] = useState(false);

  const [searchKey, setSearchKey] = useState("");
  const [filterStates, setFilterStates] = useState([]);
  const [resultOrder, setResultOrder] = useState("firstName");
  const [states, setStates] = useState([]);
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const classes = useStyles();

  async function MembersReq() {
    setLoading(true);
    const { data } = await client.query({
      query: gql`
        query Members {
          allMembers {
            id
            firstName
            lastName
            address {
              country
              state
              postalCode
              city
              addressLine
            }
            profilePictureUrl
          }
        }
      `,
    });
    setMembers(data.allMembers);
    const astates = _.uniq(data.allMembers, (x) => x.address.state).map(
      (state) => {
        return state.address.state;
      }
    );
    setStates(astates.sort());
    setLoading(false);
  }

  let list;
  if (filteredMembers.length != 0) {
    list = filteredMembers;
  } else {
    list = members;
  }

  list = sortList(list);
  list = searchMember(list, searchKey, searchprops);

  function sortList(resultlist) {
    const sortedList = [...resultlist];
    sortedList.sort((a, b) => {
      let fa = a[resultOrder].toLowerCase(),
        fb = b[resultOrder].toLowerCase();
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    return sortedList;
  }

  function searchMember(arr, searchKey, props) {
    return arr.filter(function (obj) {
      return Object.keys(obj).some(function (key) {
        if (props.includes(key)) {
          return obj[key].toLowerCase().includes(searchKey);
        }
      });
    });
  }

  const handleSearch = (e) => {
    const searchKey = e.target.value
      .trim()
      .replace(/[^a-zA-Z ]/g, "")
      .toLowerCase();
    setSearchKey(searchKey);
  };

  function setOrder(e) {
    setResultOrder(e.target.value);
  }

  function clearFilter() {
    setFilteredMembers([]);
    Array.from(document.querySelectorAll("input.filterstate")).forEach(
      (checkbox) => {
        document.getElementById(checkbox.id).checked = false;
      }
    );
  }

  function filterState(e) {
    const tempList = filterStates;
    if (e.target.checked) {
      tempList.push(e.target.defaultValue);
    } else {
      const index = tempList.indexOf(e.target.defaultValue);
      if (index > -1) {
        tempList.splice(index, 1);
      }
    }
    setFilterStates(tempList);
    const res = members.filter((mem) => {
      return tempList.includes(mem.address.state);
    });
    setFilteredMembers(res);
  }
  useEffect(() => {
    if (members.length === 0) {
      MembersReq();
    }
  }, [members]);

  return (
    <div className={classes.main}>
      <div className="main_title">
        <h2>Members</h2>
      </div>
      <div className={classes.members}>
        <div className={classes.resultFilter}>
          <div className={classes.resultFilterHeader}>
            <h3>States</h3>
            <div onClick={clearFilter} className="check_all">
              All
            </div>
          </div>
          <div className={classes.filterCheckboxes}>
            {states.length != 0
              ? states.map((state, x) => {
                  return (
                    <label key={x} className={classes.filterCheckbox}>
                      <input
                        type="checkbox"
                        id={`chkbx-${x}`}
                        className="filterstate"
                        onChange={(e) => filterState(e)}
                        value={state}
                      />
                      {state}
                      <span className="checkmark"></span>
                    </label>
                  );
                })
              : ""}
          </div>
        </div>
        <div className={classes.resultListing}>
          <div className={classes.resultInfoBar}>
            <div className={classes.resultCounter}>
              <p>
                Showing {list.length} of {members.length} items
              </p>
            </div>
            <div className={classes.searchBarHolder}>
              <input
                type="text"
                className={classes.searchBar}
                onChange={(e) => handleSearch(e)}
                placeholder="Search"
              />
              <img
                height="18px"
                className={classes.searchBarIcon}
                src="/search_icon.svg"
                alt="search"
              />
            </div>
            <select
              onChange={(e) => setOrder(e)}
              className={classes.resultOrder}
            >
              <option value="firstName">First Name</option>
              <option value="lastName">Last Name</option>
            </select>
          </div>
          <div className={classes.resultMemberList}>
            {!loading ? (
              list.length != 0 ? (
                list.map((member, i) => {
                  return (
                    <Link key={i} href={`/member/${member.id}`}>
                      <a key={i} className={classes.resultMember}>
                        <img
                          height="85"
                          src={member.profilePictureUrl}
                          alt="user avatar"
                        />
                        <p className="member_name">
                          {member.firstName} {member.lastName}
                        </p>
                        <p className="member_address_state">
                          {member.address.state}, {member.address.postalCode}
                        </p>
                        <p className="member_address_street">
                          {member.address.addressLine}, {member.address.city}
                        </p>
                      </a>
                    </Link>
                  );
                })
              ) : (
                <div className={classes.nomatch}>
                  <h4>No Match Found</h4>
                </div>
              )
            ) : (
              <div className={classes.nomatch}>
                <h4>Loading...</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
