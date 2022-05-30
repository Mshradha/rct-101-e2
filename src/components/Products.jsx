
import React, {useEffect , useState } from "react";
import Pagination from "./Pagination";
import {Flex,Grid,Spacer,GridItem,Square} from "@chakra-ui/react";
import Product from "./Product";
import AddProduct from "./AddProduct"
import axios from "axios";


const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  const[page , setPage] = useState(1);
  const [limit , setLimit] = useState(3);
  const [data,setData] = useState([]);

  useEffect(()=>{
    const getData = async()=>{
      let res = await axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`);
      console.log(res.data);
      setData(res.data)
    }
    getData()
  },[page, limit])

  return (
    <Flex>
      <Square><AddProduct/></Square>

      <Spacer>
     
      <Grid h='200px' templateRows='repeat(2,1fr)' templateColumns='repeat(5,1fr)' gap={4}>{<GridItem>{data.map((el)=> <Product key={el.id} data={el}/>)}
        </GridItem>}</Grid>
        </Spacer>
    
      <Pagination page={page} setPage={setPage} setLimit={setLimit}/>
    </Flex>
  );
};

export default Products;
