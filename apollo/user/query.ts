import {gql} from "@apollo/client"

/******************
    * PROPERTY *
********************/

export  const GET_PROPERTIES = gql`query GetProperties($input: PropertiesInquiry!) {
    getProperties(input: $input) {
        list {
            _id
            propertyType
            propertyStatus
            propertyLocation
            propertyAddress
            propertyTitle
            propertyPrice
            propertySquare
            propertyBeds
            propertyLikes
            propertyRank
            propertyViews
            propertyComments
            propertyImages
            propertyDesc
            propertyBarter
            propertyRent
            memberId
            soldAt
            deletedAt
            constructedAt
            updatedAt
            createdAt
            accessToken
            memberData {
                _id
                memberType
                memberAuthType
                memberStatus
                memberNick
                memberPhone
                memberFullName
                memberImage
                memberAddress
                memberDesc
                memberProperties
                memberFollowers
                memberFollowings
                memberArticle
                memberViews
                memberPoints
                memberLikes
                memberRank
                memberWarnings
                memberComments
                memberBlocks
                deletedAt
                updatedAt
                createdAt
                accessToken
            }
            propertyRooms
            meLiked {
                memberId
                likeRefId
                myFavorite
            }
        }
        metaCounter {
            total
        }
    }
}
`


/******************
    * ARTICLE *
********************/