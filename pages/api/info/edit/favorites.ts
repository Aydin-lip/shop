import UsersCollection from "@/db/users";
import { NextApiHandler } from "next";

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const { product_id }: { product_id: string } = req.body
    const { token } = req.headers
    if (!token) {
      res.status(400).json({ message: "There is no token in the header" })
      return
    }
    if (!product_id) {
      res.status(400).json({ message: "There is no product id in the parameter" })
      return
    }
    let { collectionToken, collectionInfo } = await UsersCollection()
    let userInfoAll = await collectionInfo.find({ token }).toArray()
    let userInfo = userInfoAll[0]
    if (userInfo) {
      let favorites: string[] = userInfo.favorites
      if (favorites.find(n => n === product_id)) {
        favorites = favorites.filter(n => n !== product_id)
      } else {
        favorites.push(product_id)
      }
      try {
        await collectionInfo.updateOne({ token }, { $set: { favorites } })
        res.status(200).json({ message: "Your favorite categories have been successfully changed", favorites })
      } catch (err) {
        res.status(500).json({ message: "have a problem in database!" })
      }
    } else {
      res.status(404).json({ message: "not found user by this token!" })
    }

  } else {
    res.status(400).json({ message: "method is false!" })
  }
}

export default Handler;