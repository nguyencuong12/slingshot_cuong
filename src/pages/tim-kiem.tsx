import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Blockquote } from "@mantine/core";

const SearchPage = () => {
    const router = useRouter();
    const { keywords } = router.query;
    const [dataResponse, setDataResponse] = useState({ title: "123" });
    useEffect(() => {
        if (keywords) {
            //FETCH DATA HERE BASE KEYWORDS !!
            console.log("LOG LOG", keywords);
        }
    }, [keywords]);
    return (
        <div>
            {/* {dataResponse.title == "" ? (
                <div>DON'T FIND</div>
            ) : (
                // <Blockquote cite="–mywebsite.com">Don't Find !!!.</Blockquote>
                <div>FIND</div>
                // <Blockquote cite="–mywebsite.com">This is result !!!.</Blockquote>
            )} */}
            <p>Keywords Search:{keywords}</p>
        </div>
    );
};

export default SearchPage;
