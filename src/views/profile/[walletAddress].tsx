import {
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import styles from "../mint.module.css";
import { CONTRACT_ADDRESS } from "./nft.tsx";
import NAVI from "../../components/navi";

export default function Profile() {
  const address = useAddress();

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const { contract } = useContract(CONTRACT_ADDRESS);

  const { data: ownedNFTs, isLoading: isOwnedNFTsLoading } = useOwnedNFTs(
    contract,
    address,
  );

  return (
    <>
      <h1>DELAYED REVEAL</h1>
      <hr />
      <p
        style={{
          textAlign: "center",
        }}
      >
        NFTs will be concealed until Phase Completes.
      </p>
      <div
        style={{
          display: "flex",
          marginBottom: "20px",
          position: "static",
          width: "60%",
        }}
      >
        {address ? (
          <div>
            <hr />
            <div>
              <hr />
              <div className={styles.grid}>
                {!isOwnedNFTsLoading ? (
                  ownedNFTs?.length! > 0 ? (
                    ownedNFTs?.map((nft) => (
                      <div key={nft.metadata.id} className={styles.NFTCard}>
                        <ThirdwebNftMedia
                          metadata={nft.metadata}
                          style={{
                            borderRadius: "16px",
                            width: "100%",
                            height: "220px",
                          }}
                        />
                        <hr />
                        <h3>{nft.metadata.name}</h3>
                      </div>
                    ))
                  ) : (
                    <p>No NFTs owned.</p>
                  )
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.main}>
            <p></p>
          </div>
        )}
      </div>
    </>
  );
}
