import React from "react";
import { useQuery } from '@apollo/client';
import { FormattedMessage } from 'react-intl';
import { GET_PRODUCTS_REVIEWS } from "./review.gql.js";
import { fullPageLoadingIndicator } from "@magento/venia-ui/lib/components/LoadingIndicator";
import ErrorView from "@magento/venia-ui/lib/components/ErrorView";
import {useStyle} from "@magento/venia-ui/lib/classify";

const Reviews = props => {
    const productSku = props.productDetails.sku;
    const mystyles ={
        border: "groove"

};
    const { loading, error, data } = useQuery(GET_PRODUCTS_REVIEWS, {
        variables: { sku: productSku},
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });
    const classes = useStyle(props.classes);
    console.log( productSku);
    if (!data) {
        if (loading) {
            return fullPageLoadingIndicator;
        }

        if (error) {
            return <ErrorView message={error.message} />;
        }
    }
    //console.log(data);


    console.log(data);//console doing in array format

    const Getreviews = data.products.items[0].reviews.items; //displaying the console data in frontend

    const relatedItems = Getreviews.map((item) => {

        return (
            <div className={classes.root} style={mystyles}>


           <div >
               <div>
                   <h1>Nick Name :</h1>
                   {item.nickname}
               </div>
               <h1>Summary  :</h1>
               <div>
                   {item.summary}

           </div>
               <div>
                   <h1>text :</h1>
                   {item.text}
               </div>


           </div></div>
        );


    }
    );
    //console.log(relatedItems);
    return (
     <div>
         <h1 className={classes.heading}>
                <FormattedMessage
                    id={'reviews.review'}
                    defaultMessage={' Products reviews'}
                />
            </h1>

         <div>{relatedItems}</div>



        </div>

    );
};

export default Reviews;