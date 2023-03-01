import React, { useEffect } from "react";
import { useRouter } from "next/router";
import ProductFullDescription from "@/components/productFullDescription";
const SanPhamComponent = () => {
    const router = useRouter();
    const { pTitle } = router.query;
    useEffect(() => {
        if (pTitle) {
            console.log("PID", pTitle);
        }
    }, [pTitle]);
    return (
        <ProductFullDescription
            title={"Ống dây gen co nhiệt cách điện màu xanh"}
            price={130000}
            description={
                "Sản phẩm mới với mức giá cực kỳ ưu đãi, phù hợp với những anh em không hay đi câu, hoặc muốn trải nghiệm sản phẩmChất lượng vẫn không đổi, vẫn là tơ nhện bá đạo tung hoành ngang dọc Đi câu mà thiếu tơ nhện thì cứ cảm thấy thế nào ấy anh em nhỉ"
            }
        />
    );
};

export default SanPhamComponent;
