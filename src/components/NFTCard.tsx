import {
  ThirdwebNftMedia,
  useContract,
  useNFT,
  Web3Button,
} from "@thirdweb-dev/react";
import type { FC } from "react";
import { contractAddress2, stakingContractAddress } from "./addresses.js";
import styles from "../styles/Home.module.css";

interface NFTCardProps {
  tokenId: number;
}

const NFTCard: FC<NFTCardProps> = ({ tokenId }) => {
  const { contract } = useContract(contractAddress2, "nft-drop");
  const { data: nft } = useNFT(contract, tokenId);

  return (
    <>
      {nft && (
        <div style={{alignItems: "center"}}>
          {nft.metadata && (
            <ThirdwebNftMedia
              style={{ borderRadius: "32px", width: "100%", height: "250px"  }}
              metadata={nft.metadata}
              className={styles.nftMedia}
            />
          )}
          <hr />

          <h5 style={{ textAlign: "center" }}>{nft.metadata.name}</h5>
          <hr />
          <Web3Button
            style={{
              backgroundColor: "black",
              borderStyle: "solid",
              borderColor: "Orange",
              color: "Orange",
              display: "flex",
              flexDirection: "center",
              alignItems: "center"
            }}
            action={(contract) =>
              contract?.call("withdraw", [[nft.metadata.id]])
            }
            contractAddress={stakingContractAddress}
          >
            UNLOCKED
          </Web3Button>
          <hr />
        </div>
      )}
    </>
  );
};
export default NFTCard;
