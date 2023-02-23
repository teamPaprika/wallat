/**
  Below is a contract of Wallat
*/

pub contract Wallat {
  // pub var targets: @[Target]
  pub var registeredEmblems: [Emblem]
  pub var deployedSurveys: [Survey]

  pub fun deploySurvey (id:String,name: String, emblemNames: [String], url: String) {
    // id is randomly generated
    let survey = Survey(id: id, name: name, emblemNames: emblemNames, url: url)

    Wallat.deployedSurveys.append(survey)
  }

  pub struct Survey {
    pub let id: String
    pub let name: String
    pub let emblemNames: [String]
    pub let url: String

    init(id: String, name: String, emblemNames: [String], url: String) {
      self.id = id
      self.name = name
      self.emblemNames = emblemNames
      self.url = url
    }
  }




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

  pub struct UserEmblemStorage {
    pub let acquiredEmblems: [Emblem]

    pub fun getEmblemCount(): Int {
      return self.acquiredEmblems.length
    }

    pub fun addEmblem(emblemId: String) {
       let emblem = Wallat.getEmblemById(id: emblemId)
        if !self.checkIfEmblemExists(emblem: emblem) {
          self.acquiredEmblems.append(emblem)
        }
    }

    pub fun checkIfEmblemExists(emblem: Emblem): Bool {
      for registeredEmblem in self.acquiredEmblems {
        if registeredEmblem.id == emblem.id {
          return true
        }
      }
      return false
    }

    init() {
      self.acquiredEmblems = []
    }
  }

  pub fun getEmblemById(id: String): Emblem {
    for registeredEmblem in Wallat.registeredEmblems {
      if registeredEmblem.id == id {
        return registeredEmblem
      }
    }
    return Emblem(id: "", name: "", alias: [], description: "")
  }


  pub fun checkIfEmblemExists(emblem: Emblem): Bool {
    for registeredEmblem in Wallat.registeredEmblems {
      if registeredEmblem.id == emblem.id {
        return true
      }
    }
    return false
  }

  pub resource Administrator {
    pub fun registerNewEmblem(id:String,name: String, alias: [String], description: String) {
      let emblem = Emblem(id: id, name: name, alias: alias, description: description)
      if !emblem.validate() {
        Wallat.registeredEmblems.append(emblem)
      }
    }
  }

  pub fun createNewUserEmblemStorage(): UserEmblemStorage {
    let newUserEmblemStorage = UserEmblemStorage()
    return newUserEmblemStorage
  }

  pub fun querySurveyByEmblem (emblemNames: [String]) : [Survey] {
     var surveys: [Survey] = []
     for survey in Wallat.deployedSurveys {
       for emblem in survey.emblemNames {
       if(emblemNames.contains(emblem)) {
           surveys.append(survey)
         }
       }
     }
     return surveys
   }

  init() {
    self.registeredEmblems = []
    self.deployedSurveys = []
    self.account.save<@Administrator>(<-create Administrator(), to: /storage/WallatAdmin)
  }

}