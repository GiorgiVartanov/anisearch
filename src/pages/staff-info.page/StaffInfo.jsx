import Loading from "../../components/utility/loading.component/Loading";
import Card from "../../components/body/card/Card";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_STAFF_PAGE } from "../../queries/staffQueries";

const StaffInfo = () => {
    const { id } = useParams();

    const { loading, error, data } = useQuery(GET_STAFF_PAGE, {
        variables: { id: id },
    });

    if (loading) return <Loading />;
    if (error) return <p>Something went wrong...</p>;

    return (
        <main className="centered">
            <img
                src={data.Staff.image.large}
                alt={data.Staff.name.full}
                className="info-page-image"
            />
            <h2 className="info-page-name">{data.Staff.name.full}</h2>
            <p>{data.Staff.description}</p>
            <div className="info-section">
                <h3>Other Information</h3>
                <div className="info-section-text">
                    <p>hometown : {data.Staff.homeTown}</p>
                    <p>age : {data.Staff.age}</p>
                    <p>
                        date of birth : {data.Staff.dateOfBirth.year} /{" "}
                        {data.Staff.dateOfBirth.month} /{" "}
                        {data.Staff.dateOfBirth.day}
                    </p>
                    {data.Staff.dateOfDeath.year && (
                        <p>
                            date of death : {data.Staff.dateOfDeath.year} /{" "}
                            {data.Staff.dateOfDeath.month} /{" "}
                            {data.Staff.dateOfDeath.day}
                        </p>
                    )}
                    <p>
                        Years Of Active : {data.Staff.yearsActive[0]} -{" "}
                        {data.Staff.yearsActive[1] || "Current Days"}
                    </p>
                </div>
            </div>

            <div className="info-section">
                <h3>Voiced</h3>
                <div className="thin-card-holder">
                    {data.Staff.characters.edges.map((item) => {
                        return (
                            <Card
                                key={item.node.id}
                                id={item.node.id}
                                image={item.node.image.large}
                                name={item.node.name.full}
                                type={"character"}
                            />
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default StaffInfo;
