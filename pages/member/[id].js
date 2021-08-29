import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import MemberDetails from "../../src/components/MemberDetails";

const client = new ApolloClient({
  uri: "https://cooltix-frontend-challenge.herokuapp.com",
  cache: new InMemoryCache(),
});

export const getStaticPaths = async () => {
  const res = await client.query({
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
  const paths = res.data.allMembers.map((member) => {
    return {
      params: { id: member.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

const GET_MEMBER = gql`
  query ($memberId: ID!) {
    member(id: $memberId) {
      id
      firstName
      lastName
      email
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
`;

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await client.query({
    query: GET_MEMBER,
    variables: { memberId: id },
    options: {},
  });
  return {
    props: { member: res.data.member },
  };
};

const Member = ({ member }) => {
  return <MemberDetails member={member} />;
};
export default Member;

/* const MemberDetails = ({ member }) => {
  const [options, setoptions] = useState([]);
  const classes = useStyles();

  useEffect(() => {}, []);

  return (
    <div className={classes.member}>
      <div className={classes.memberAvatar}>
        <img
          height="150"
          src={member.profilePictureUrl}
          alt="default user avatar"
        />
        <h2>
          {member.firstName} {member.lastName}
        </h2>
      </div>

      <div className={classes.memberDetails}>
        <div className={classes.memberHeader}>
          <h3>Details</h3>
          <div className={classes.memberButtons}>
            <div className={`${classes.memberBtn} ${classes.memberBtnEdit}`}>
              Edit
            </div>
            <div className={`${classes.memberBtn} ${classes.memberBtnDelete}`}>
              Delete
            </div>
          </div>
        </div>
        <div className={classes.detailsWrap}>
          <div className={classes.detailRow}>
            <div className={classes.detail}>
              <div className={classes.detailLabel}>First Name:</div>
              <div className={classes.detailData}>{member.firstName}</div>
            </div>
            <div className={classes.detail}>
              <div className={classes.detailLabel}>Last Name:</div>
              <div className={classes.detailData}>{member.lastName}</div>
            </div>
            <div className={classes.detail}>
              <div className={classes.detailLabel}>Email:</div>
              <div className={classes.detailData}>{member.email}</div>
            </div>
          </div>
          <div className={classes.detailRow}>
            <div className={classes.detail}>
              <div className={classes.detailLabel}>Country:</div>
              <div className={classes.detailData}>{member.address.country}</div>
            </div>
            <div className={classes.detail}>
              <div className={classes.detailLabel}>State:</div>
              <div className={classes.detailData}>{member.address.state}</div>
            </div>
            <div className={classes.detail}>
              <div className={classes.detailLabel}>Postal Code:</div>
              <div className={classes.detailData}>
                {member.address.postalCode}
              </div>
            </div>
          </div>
          <div className={classes.detailRow}>
            <div className={classes.detail}>
              <div className={classes.detailLabel}>City:</div>
              <div className={classes.detailData}>{member.address.city}</div>
            </div>
            <div className={`${classes.detail} ${classes.detailLabelAddress}`}>
              <div className={classes.detailLabel}>Address Line:</div>
              <div className={classes.detailData}>
                {member.address.addressLine}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.memberSlots}>
        <div className={classes.membersSlotLeft}>
          <Pictures />
        </div>
        <div className={classes.membersSlotRight}>
          <Purchases />
        </div>
      </div>
    </div>
  );
};
export default MemberDetails;
 */
