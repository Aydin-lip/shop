import ConnectionJSON from "@/db/json";
import UsersCollection from "@/db/users";
import { NextApiHandler } from "next";

const Handler: NextApiHandler = async (req, res) => {
  const { id } = req.query
  const { token } = req.headers
  if (!token) {
    res.status(400).json({ message: "There is no token in the header" })
    return
  }

  let { collectionToken, collectionInfo } = await UsersCollection()
  let userInfo = await collectionInfo.find(ci => ci.token === token)

  if (userInfo) {
    let allBag = userInfo.cart.bag

    if (allBag.find(a => String(a.id) === id)) {
      allBag = allBag.filter(a => String(a.id) != id)

      if (userInfo) {
        let newUserInfo = {
          ...userInfo,
          cart: {
            ...userInfo.cart,
            bag: allBag
          }
        }
        let filterCollectionInfo = collectionInfo.filter(ci => ci._id !== userInfo?._id)
        filterCollectionInfo.push(newUserInfo)
        try {
          await ConnectionJSON("usersInfo", filterCollectionInfo)
          res.status(200).json({ message: `This ID (${id}) has been successfully deleted from your bag`, bag: allBag })
        } catch (err) {
          res.status(500).json({ message: "have a problem in database!" })
        }
      }

    } else {
      res.status(404).json({ message: "You do not have this ID in your bag" })
    }

  } else {
    res.status(404).json({ message: "not found user by this token!" })
  }

}

export default Handler