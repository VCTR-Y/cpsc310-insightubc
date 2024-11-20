import { Heading, Box, List } from "@chakra-ui/react";
import DatasetCard from "./DatasetCard";

function ListDatasetCard(props) {
	const { datasets, deleteDataset, selectDataset } = props;
	return (
		<Box className="list-dataset" m="10px" p={"5"}>
			<Heading as="h2" size="lg" m="10px">Datasets</Heading>
			<List>
				{datasets.map((dataset, index) => {
					return <DatasetCard key={dataset.id} dataset={dataset} deleteDataset={deleteDataset} selectDataset={selectDataset}></DatasetCard>;
				})}
			</List>
		</Box>
	);
}

export default ListDatasetCard;
