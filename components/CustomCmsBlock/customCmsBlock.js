import React from "react";
import CmsBlockGroup from "@magento/venia-ui/lib/components/CmsBlock";
const CustomCmsBlock = () =>
{
    return (
        <div>
            <div>This this my cms page</div>
            <CmsBlockGroup identifiers={['home-page-block']} />
        </div>

    );
};
export default CustomCmsBlock;