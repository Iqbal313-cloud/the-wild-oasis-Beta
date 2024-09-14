import Heading from "../ui/Heading";
import Row from "../ui/Row";

import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import CabilnTableOperations from "../features/cabins/CabilnTableOperations";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabilnTableOperations />
        {/* <img src="https://jistleobwembmrmeskdj.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg" /> */}
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
