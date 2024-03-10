import { Card, Spin, Flex, Empty } from "antd"
import Meta from "antd/es/card/Meta"
import useNFTQuery from '../../hook/useNFTQuery'



const List = () => {

    const {data, isLoading, isError} = useNFTQuery()

    return (
        <>
            <Flex 
                wrap="wrap" 
                gap="large" 
                style={{ 
                    padding: "30px",
                    height: 'full'
                }}
            >

            {
                isLoading 
                ? 
                <Spin 
                    style={{ 
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    }}
                />
                :
                isError
                ?
                <Empty 
                    style={{ 
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    }}
                />
                :
                data.result.map((item, index) => (
                    <Card
                        hoverable
                        style={{ 
                            body: {
                                marginTop: "auto"
                            },
                            width: "calc(25% - 20px)" 
                        }}
                        cover={<img alt="example" src={item.image_uri} />}
                        key={index}
                    >

                        <Meta 
                            title="Europe Street beat" 
                            description="www.instagram.com" 
                            style={{ marginTop: "auto" }}
                        />

                    </Card>

                ))
            }

            </Flex>
        </>
    )

}

export default List