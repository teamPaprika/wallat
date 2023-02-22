/**
  Below is a contract of Wallat
*/

pub contract Wallat {
  // pub var targets: @[Target]
  pub var registeredEmblems: [Emblem]




  // Emblem is a piece of information that can be acquired by a user
  pub struct Emblem {
    pub let id: String
    pub let name: String
    pub let alias: [String]
    pub let description: String

    init(id: String, name: String, alias: [String], description: String) {
      self.id = id
      self.name = name
      self.alias = alias
      self.description = description
    }



    // check if the emblem is registered
    pub fun validate():Bool {
      return Wallat.checkIfEmblemExists(emblem:self)
    }

  }

  pub resource UserEmblemStorage {
    pub let acquiredEmblems: [Emblem]
    init() {
      self.acquiredEmblems = []
    }

    pub fun addEmblem(emblem: Emblem) {
      self.acquiredEmblems.append(emblem)
    }
  }

  pub fun checkIfEmblemExists(emblem: Emblem): Bool {
    for registeredEmblem in Wallat.registeredEmblems {
      if registeredEmblem.id == emblem.id {
        return true
      }
    }
    return false
  }

  pub fun registerEmblem(id:String,name: String, alias: [String], description: String) {
    // id is randomly generated
    let emblem = Emblem(id: id, name: name, alias: alias, description: description)
    if !emblem.validate() {
      Wallat.registeredEmblems.append(emblem)
    }
  }

  pub fun acquireEmblemStorage(): @UserEmblemStorage {
    return <-create UserEmblemStorage()
  }



  init() {
    self.registeredEmblems = []
  }

}