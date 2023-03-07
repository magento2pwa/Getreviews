import React from "react";
import CmsBlockGroup from "@magento/venia-ui/lib/components/CmsBlock";
const CustomCmsBlock = () =>
{
    return (
        <CmsBlockGroup identifiers={['home-page-block','about-magento-demo-store']} />
    );
}
;export default CustomCmsBlock;