import TableOpearations from "../../ui/TableOperations";

import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabilnTableOperations() {
  return (
    <TableOpearations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort By name (A - Z)" },
          { value: "name-desc", label: "Sort By name (Z - A)" },
          { value: "regularPrice-asc", label: "Sort By price (low-first)" },
          { value: "regularPrice-desc", label: "Sort By price (high-first)" },
          {
            value: "maxCapacity-asc",
            label: "Sort By maxCapacity (low-first)",
          },
          {
            value: "maxCapacity-desc",
            label: "Sort By maxCapacity (high-first)",
          },
        ]}
      />
    </TableOpearations>
  );
}

export default CabilnTableOperations;
