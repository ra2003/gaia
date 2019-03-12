import { testAuth } from './testAuth.js'
import { testServer } from './testServer.js'
import { testDrivers } from './testDrivers.js'
import { testHttp } from './testHttp.js'
import { testConfig } from './testConfig.js'
import { testProofChecker } from './testProofChecker.js'

testConfig()


testServer()
testAuth()
testDrivers()

testHttp()
testProofChecker()