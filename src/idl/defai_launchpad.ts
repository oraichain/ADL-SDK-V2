/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/defai_launchpad.json`.
 */
export type DefaiLaunchpad = {
  address: 'defaiebB9MiMfLS1owtAjkfhKLhn7Y5p8jdTkdX2T6k';
  metadata: {
    name: 'defaiLaunchpad';
    version: '0.1.0';
    spec: '0.1.0';
    description: 'Created with Anchor';
  };
  instructions: [
    {
      name: 'acceptAuthority';
      discriminator: [107, 86, 198, 91, 33, 12, 107, 160];
      accounts: [
        {
          name: 'newAdmin';
          writable: true;
          signer: true;
        },
        {
          name: 'authority';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [97, 117, 116, 104, 111, 114, 105, 116, 121];
              }
            ];
          };
        }
      ];
      args: [];
    },
    {
      name: 'allowClaim';
      discriminator: [93, 153, 185, 37, 109, 118, 227, 134];
      accounts: [
        {
          name: 'globalConfig';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: 'migrator';
          writable: true;
          signer: true;
        },
        {
          name: 'tokenMint';
        },
        {
          name: 'bondingCurve';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 111, 110, 100, 105, 110, 103, 95, 99, 117, 114, 118, 101];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        }
      ];
      args: [
        {
          name: 'canClaim';
          type: 'bool';
        }
      ];
    },
    {
      name: 'buyParty';
      discriminator: [180, 83, 103, 56, 18, 11, 78, 3];
      accounts: [
        {
          name: 'globalConfig';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: 'pause';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [112, 97, 117, 115, 101];
              }
            ];
          };
        },
        {
          name: 'stakingVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 105, 110, 103, 95, 118, 97, 117, 108, 116, 95, 118, 50];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'teamWallet';
          writable: true;
        },
        {
          name: 'creatorWallet';
          writable: true;
        },
        {
          name: 'bondingCurve';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 111, 110, 100, 105, 110, 103, 95, 99, 117, 114, 118, 101];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'stakerInfo';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 101, 114, 95, 105, 110, 102, 111, 95, 118, 50];
              },
              {
                kind: 'account';
                path: 'stakingVault';
              },
              {
                kind: 'account';
                path: 'user';
              }
            ];
          };
        },
        {
          name: 'curveVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 117, 114, 118, 101, 95, 118, 97, 117, 108, 116];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'curveVaultAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'curveVault';
              },
              {
                kind: 'account';
                path: 'tokenProgram';
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ];
            };
          };
        },
        {
          name: 'tokenMint';
        },
        {
          name: 'userAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'tokenProgram';
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ];
            };
          };
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        }
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
        {
          name: 'direction';
          type: 'u8';
        },
        {
          name: 'minimumReceiveAmount';
          type: 'u64';
        }
      ];
      returns: 'u64';
    },
    {
      name: 'claimToken';
      discriminator: [116, 206, 27, 191, 166, 19, 0, 73];
      accounts: [
        {
          name: 'pause';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [112, 97, 117, 115, 101];
              }
            ];
          };
        },
        {
          name: 'globalConfig';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: 'bondingCurve';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 111, 110, 100, 105, 110, 103, 95, 99, 117, 114, 118, 101];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'curveVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 117, 114, 118, 101, 95, 118, 97, 117, 108, 116];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'stakingVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 105, 110, 103, 95, 118, 97, 117, 108, 116, 95, 118, 50];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'userStakeInfoPda';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 101, 114, 95, 105, 110, 102, 111, 95, 118, 50];
              },
              {
                kind: 'account';
                path: 'stakingVault';
              },
              {
                kind: 'account';
                path: 'receiver';
              }
            ];
          };
        },
        {
          name: 'userInfoPda';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [117, 115, 101, 114, 95, 105, 110, 102, 111];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              },
              {
                kind: 'account';
                path: 'receiver';
              }
            ];
          };
        },
        {
          name: 'tokenMint';
        },
        {
          name: 'curveVaultAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'curveVault';
              },
              {
                kind: 'account';
                path: 'tokenProgram';
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ];
            };
          };
        },
        {
          name: 'receiverAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'receiver';
              },
              {
                kind: 'account';
                path: 'tokenProgram';
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ];
            };
          };
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'receiver';
          writable: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        }
      ];
      args: [];
    },
    {
      name: 'claimTokenLegacy';
      discriminator: [97, 1, 38, 190, 139, 188, 101, 137];
      accounts: [
        {
          name: 'pause';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [112, 97, 117, 115, 101];
              }
            ];
          };
        },
        {
          name: 'globalConfig';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: 'bondingCurve';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 111, 110, 100, 105, 110, 103, 95, 99, 117, 114, 118, 101];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'curveVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 117, 114, 118, 101, 95, 118, 97, 117, 108, 116];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'stakingVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 105, 110, 103, 95, 118, 97, 117, 108, 116];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'userStakeInfoPda';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 101, 95, 105, 110, 102, 111];
              },
              {
                kind: 'account';
                path: 'stakingVault';
              },
              {
                kind: 'account';
                path: 'receiver';
              }
            ];
          };
        },
        {
          name: 'userInfoPda';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [117, 115, 101, 114, 95, 105, 110, 102, 111];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              },
              {
                kind: 'account';
                path: 'receiver';
              }
            ];
          };
        },
        {
          name: 'tokenMint';
        },
        {
          name: 'curveVaultAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'curveVault';
              },
              {
                kind: 'account';
                path: 'tokenProgram';
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ];
            };
          };
        },
        {
          name: 'receiverAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'receiver';
              },
              {
                kind: 'account';
                path: 'tokenProgram';
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ];
            };
          };
        },
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'receiver';
          writable: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        }
      ];
      args: [];
    },
    {
      name: 'configure';
      discriminator: [245, 7, 108, 117, 95, 196, 54, 217];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'authority';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [97, 117, 116, 104, 111, 114, 105, 116, 121];
              }
            ];
          };
        },
        {
          name: 'config';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: 'pause';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [112, 97, 117, 115, 101];
              }
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        }
      ];
      args: [
        {
          name: 'newConfig';
          type: {
            defined: {
              name: 'config';
            };
          };
        }
      ];
    },
    {
      name: 'destake';
      discriminator: [70, 3, 73, 97, 22, 50, 116, 1];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'stakingVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 105, 110, 103, 95, 118, 97, 117, 108, 116, 95, 118, 50];
              },
              {
                kind: 'account';
                path: 'rewardCurrencyMint';
              }
            ];
          };
        },
        {
          name: 'vaultTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'stakingVault';
              },
              {
                kind: 'account';
                path: 'tokenProgram';
              },
              {
                kind: 'account';
                path: 'stakeCurrencyMint';
              }
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ];
            };
          };
        },
        {
          name: 'stakerInfo';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 101, 114, 95, 105, 110, 102, 111, 95, 118, 50];
              },
              {
                kind: 'account';
                path: 'stakingVault';
              },
              {
                kind: 'account';
                path: 'signer';
              }
            ];
          };
        },
        {
          name: 'stakerTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'signer';
              },
              {
                kind: 'account';
                path: 'tokenProgram';
              },
              {
                kind: 'account';
                path: 'stakeCurrencyMint';
              }
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ];
            };
          };
        },
        {
          name: 'stakeCurrencyMint';
        },
        {
          name: 'rewardCurrencyMint';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        }
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        }
      ];
    },
    {
      name: 'destakeLegacy';
      discriminator: [4, 136, 163, 251, 82, 78, 116, 0];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'globalConfig';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: 'stakingVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 105, 110, 103, 95, 118, 97, 117, 108, 116];
              },
              {
                kind: 'account';
                path: 'rewardCurrencyMint';
              }
            ];
          };
        },
        {
          name: 'vaultTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'stakingVault';
              },
              {
                kind: 'account';
                path: 'tokenProgram';
              },
              {
                kind: 'account';
                path: 'stakeCurrencyMint';
              }
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ];
            };
          };
        },
        {
          name: 'stakerInfo';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 101, 95, 105, 110, 102, 111];
              },
              {
                kind: 'account';
                path: 'stakingVault';
              },
              {
                kind: 'account';
                path: 'signer';
              }
            ];
          };
        },
        {
          name: 'stakerTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'signer';
              },
              {
                kind: 'account';
                path: 'tokenProgram';
              },
              {
                kind: 'account';
                path: 'stakeCurrencyMint';
              }
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ];
            };
          };
        },
        {
          name: 'stakeCurrencyMint';
        },
        {
          name: 'rewardCurrencyMint';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        }
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        }
      ];
    },
    {
      name: 'idoBuyParty';
      discriminator: [0, 44, 119, 32, 188, 198, 12, 54];
      accounts: [
        {
          name: 'globalConfig';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: 'idoConfig';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              },
              {
                kind: 'const';
                value: [105, 100, 111];
              }
            ];
          };
        },
        {
          name: 'pause';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [112, 97, 117, 115, 101];
              }
            ];
          };
        },
        {
          name: 'stakingVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 105, 110, 103, 95, 118, 97, 117, 108, 116];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'teamWallet';
          writable: true;
        },
        {
          name: 'bondingCurve';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 111, 110, 100, 105, 110, 103, 95, 99, 117, 114, 118, 101];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'stakerInfo';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 101, 95, 105, 110, 102, 111];
              },
              {
                kind: 'account';
                path: 'stakingVault';
              },
              {
                kind: 'account';
                path: 'user';
              }
            ];
          };
        },
        {
          name: 'curveVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 117, 114, 118, 101, 95, 118, 97, 117, 108, 116];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'curveVaultAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'curveVault';
              },
              {
                kind: 'account';
                path: 'tokenProgram';
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ];
            };
          };
        },
        {
          name: 'tokenMint';
        },
        {
          name: 'userAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'tokenProgram';
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ];
            };
          };
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        }
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
        {
          name: 'direction';
          type: 'u8';
        }
      ];
      returns: 'u64';
    },
    {
      name: 'idoConfigure';
      discriminator: [215, 102, 165, 166, 29, 10, 30, 36];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'authority';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [97, 117, 116, 104, 111, 114, 105, 116, 121];
              }
            ];
          };
        },
        {
          name: 'config';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              },
              {
                kind: 'const';
                value: [105, 100, 111];
              }
            ];
          };
        },
        {
          name: 'pause';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [112, 97, 117, 115, 101];
              }
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        }
      ];
      args: [
        {
          name: 'newConfig';
          type: {
            defined: {
              name: 'idoConfig';
            };
          };
        }
      ];
    },
    {
      name: 'idoLaunch';
      discriminator: [210, 40, 216, 203, 114, 217, 3, 31];
      accounts: [
        {
          name: 'globalConfig';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: 'idoConfig';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              },
              {
                kind: 'const';
                value: [105, 100, 111];
              }
            ];
          };
        },
        {
          name: 'creator';
          writable: true;
          signer: true;
        },
        {
          name: 'token';
          writable: true;
          signer: true;
        },
        {
          name: 'bondingCurve';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 111, 110, 100, 105, 110, 103, 95, 99, 117, 114, 118, 101];
              },
              {
                kind: 'account';
                path: 'token';
              }
            ];
          };
        },
        {
          name: 'curveVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 117, 114, 118, 101, 95, 118, 97, 117, 108, 116];
              },
              {
                kind: 'account';
                path: 'token';
              }
            ];
          };
        },
        {
          name: 'tokenMetadataAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [109, 101, 116, 97, 100, 97, 116, 97];
              },
              {
                kind: 'const';
                value: [
                  11,
                  112,
                  101,
                  177,
                  227,
                  209,
                  124,
                  69,
                  56,
                  157,
                  82,
                  127,
                  107,
                  4,
                  195,
                  205,
                  88,
                  184,
                  108,
                  115,
                  26,
                  160,
                  253,
                  181,
                  73,
                  182,
                  209,
                  188,
                  3,
                  248,
                  41,
                  70
                ];
              },
              {
                kind: 'account';
                path: 'token';
              }
            ];
            program: {
              kind: 'const';
              value: [
                11,
                112,
                101,
                177,
                227,
                209,
                124,
                69,
                56,
                157,
                82,
                127,
                107,
                4,
                195,
                205,
                88,
                184,
                108,
                115,
                26,
                160,
                253,
                181,
                73,
                182,
                209,
                188,
                3,
                248,
                41,
                70
              ];
            };
          };
        },
        {
          name: 'stakingVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 105, 110, 103, 95, 118, 97, 117, 108, 116];
              },
              {
                kind: 'account';
                path: 'token';
              }
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'mplTokenMetadataProgram';
          address: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s';
        }
      ];
      args: [
        {
          name: 'name';
          type: 'string';
        },
        {
          name: 'symbol';
          type: 'string';
        },
        {
          name: 'uri';
          type: 'string';
        },
        {
          name: 'fundRaise';
          type: 'u64';
        },
        {
          name: 'fundsExpiration';
          type: 'u64';
        },
        {
          name: 'whitelistRoundPeriod';
          type: 'u64';
        },
        {
          name: 'partyLimit';
          type: 'u64';
        }
      ];
    },
    {
      name: 'idoSwap';
      discriminator: [151, 170, 32, 71, 192, 254, 237, 246];
      accounts: [
        {
          name: 'globalConfig';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: 'idoConfig';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              },
              {
                kind: 'const';
                value: [105, 100, 111];
              }
            ];
          };
        },
        {
          name: 'pause';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [112, 97, 117, 115, 101];
              }
            ];
          };
        },
        {
          name: 'teamWallet';
          writable: true;
        },
        {
          name: 'bondingCurve';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 111, 110, 100, 105, 110, 103, 95, 99, 117, 114, 118, 101];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'curveVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 117, 114, 118, 101, 95, 118, 97, 117, 108, 116];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'tokenMint';
        },
        {
          name: 'curveVaultAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'curveVault';
              },
              {
                kind: 'account';
                path: 'tokenProgram';
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ];
            };
          };
        },
        {
          name: 'stakingVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 105, 110, 103, 95, 118, 97, 117, 108, 116];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'userStakeInfoPda';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 101, 95, 105, 110, 102, 111];
              },
              {
                kind: 'account';
                path: 'stakingVault';
              },
              {
                kind: 'account';
                path: 'user';
              }
            ];
          };
        },
        {
          name: 'userInfoPda';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [117, 115, 101, 114, 95, 105, 110, 102, 111];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              },
              {
                kind: 'account';
                path: 'user';
              }
            ];
          };
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        }
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
        {
          name: 'direction';
          type: 'u8';
        }
      ];
      returns: 'u64';
    },
    {
      name: 'initialize';
      discriminator: [175, 175, 109, 31, 13, 152, 155, 237];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'authority';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [97, 117, 116, 104, 111, 114, 105, 116, 121];
              }
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        }
      ];
      args: [];
    },
    {
      name: 'launch';
      discriminator: [153, 241, 93, 225, 22, 69, 74, 61];
      accounts: [
        {
          name: 'globalConfig';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: 'stakingConfig';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 105, 110, 103, 95, 99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: 'creator';
          writable: true;
          signer: true;
        },
        {
          name: 'token';
          writable: true;
          signer: true;
        },
        {
          name: 'bondingCurve';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 111, 110, 100, 105, 110, 103, 95, 99, 117, 114, 118, 101];
              },
              {
                kind: 'account';
                path: 'token';
              }
            ];
          };
        },
        {
          name: 'curveVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 117, 114, 118, 101, 95, 118, 97, 117, 108, 116];
              },
              {
                kind: 'account';
                path: 'token';
              }
            ];
          };
        },
        {
          name: 'creatorInfo';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 114, 101, 97, 116, 111, 114, 95, 105, 110, 102, 111];
              },
              {
                kind: 'account';
                path: 'token';
              }
            ];
          };
        },
        {
          name: 'tokenMetadataAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [109, 101, 116, 97, 100, 97, 116, 97];
              },
              {
                kind: 'const';
                value: [
                  11,
                  112,
                  101,
                  177,
                  227,
                  209,
                  124,
                  69,
                  56,
                  157,
                  82,
                  127,
                  107,
                  4,
                  195,
                  205,
                  88,
                  184,
                  108,
                  115,
                  26,
                  160,
                  253,
                  181,
                  73,
                  182,
                  209,
                  188,
                  3,
                  248,
                  41,
                  70
                ];
              },
              {
                kind: 'account';
                path: 'token';
              }
            ];
            program: {
              kind: 'const';
              value: [
                11,
                112,
                101,
                177,
                227,
                209,
                124,
                69,
                56,
                157,
                82,
                127,
                107,
                4,
                195,
                205,
                88,
                184,
                108,
                115,
                26,
                160,
                253,
                181,
                73,
                182,
                209,
                188,
                3,
                248,
                41,
                70
              ];
            };
          };
        },
        {
          name: 'stakingVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 105, 110, 103, 95, 118, 97, 117, 108, 116, 95, 118, 50];
              },
              {
                kind: 'account';
                path: 'token';
              }
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'tokenProgram';
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'mplTokenMetadataProgram';
          address: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s';
        }
      ];
      args: [
        {
          name: 'name';
          type: 'string';
        },
        {
          name: 'symbol';
          type: 'string';
        },
        {
          name: 'uri';
          type: 'string';
        },
        {
          name: 'curveLimit';
          type: 'u64';
        },
        {
          name: 'whitelistRoundPeriod';
          type: 'u64';
        },
        {
          name: 'partyLimit';
          type: 'u64';
        },
        {
          name: 'createFee';
          type: 'f64';
        },
        {
          name: 'creatorVestingPeriod';
          type: 'u64';
        }
      ];
    },
    {
      name: 'launch2022';
      discriminator: [205, 153, 200, 190, 141, 72, 63, 214];
      accounts: [
        {
          name: 'globalConfig';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: 'stakingConfig';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 105, 110, 103, 95, 99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: 'creator';
          writable: true;
          signer: true;
        },
        {
          name: 'token';
          writable: true;
          signer: true;
        },
        {
          name: 'bondingCurve';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 111, 110, 100, 105, 110, 103, 95, 99, 117, 114, 118, 101];
              },
              {
                kind: 'account';
                path: 'token';
              }
            ];
          };
        },
        {
          name: 'curveVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 117, 114, 118, 101, 95, 118, 97, 117, 108, 116];
              },
              {
                kind: 'account';
                path: 'token';
              }
            ];
          };
        },
        {
          name: 'creatorInfo';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 114, 101, 97, 116, 111, 114, 95, 105, 110, 102, 111];
              },
              {
                kind: 'account';
                path: 'token';
              }
            ];
          };
        },
        {
          name: 'tokenMetadataAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [109, 101, 116, 97, 100, 97, 116, 97];
              },
              {
                kind: 'const';
                value: [
                  11,
                  112,
                  101,
                  177,
                  227,
                  209,
                  124,
                  69,
                  56,
                  157,
                  82,
                  127,
                  107,
                  4,
                  195,
                  205,
                  88,
                  184,
                  108,
                  115,
                  26,
                  160,
                  253,
                  181,
                  73,
                  182,
                  209,
                  188,
                  3,
                  248,
                  41,
                  70
                ];
              },
              {
                kind: 'account';
                path: 'token';
              }
            ];
            program: {
              kind: 'const';
              value: [
                11,
                112,
                101,
                177,
                227,
                209,
                124,
                69,
                56,
                157,
                82,
                127,
                107,
                4,
                195,
                205,
                88,
                184,
                108,
                115,
                26,
                160,
                253,
                181,
                73,
                182,
                209,
                188,
                3,
                248,
                41,
                70
              ];
            };
          };
        },
        {
          name: 'stakingVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 105, 110, 103, 95, 118, 97, 117, 108, 116, 95, 118, 50];
              },
              {
                kind: 'account';
                path: 'token';
              }
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'rent';
          address: 'SysvarRent111111111111111111111111111111111';
        },
        {
          name: 'tokenProgram';
          address: 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        },
        {
          name: 'mplTokenMetadataProgram';
          address: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s';
        }
      ];
      args: [
        {
          name: 'name';
          type: 'string';
        },
        {
          name: 'symbol';
          type: 'string';
        },
        {
          name: 'uri';
          type: 'string';
        },
        {
          name: 'curveLimit';
          type: 'u64';
        },
        {
          name: 'whitelistRoundPeriod';
          type: 'u64';
        },
        {
          name: 'partyLimit';
          type: 'u64';
        },
        {
          name: 'createFee';
          type: 'f64';
        },
        {
          name: 'creatorVestingPeriod';
          type: 'u64';
        }
      ];
    },
    {
      name: 'nominateAuthority';
      discriminator: [148, 182, 144, 91, 186, 12, 118, 18];
      accounts: [
        {
          name: 'admin';
          writable: true;
          signer: true;
        },
        {
          name: 'authority';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [97, 117, 116, 104, 111, 114, 105, 116, 121];
              }
            ];
          };
        }
      ];
      args: [
        {
          name: 'newAdmin';
          type: 'pubkey';
        }
      ];
    },
    {
      name: 'pauseContract';
      discriminator: [210, 36, 5, 85, 177, 65, 35, 89];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'authority';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [97, 117, 116, 104, 111, 114, 105, 116, 121];
              }
            ];
          };
        },
        {
          name: 'pause';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [112, 97, 117, 115, 101];
              }
            ];
          };
        }
      ];
      args: [
        {
          name: 'status';
          type: 'bool';
        }
      ];
    },
    {
      name: 'registerDcaPolicy';
      discriminator: [93, 30, 104, 25, 142, 7, 252, 48];
      accounts: [
        {
          name: 'creator';
          writable: true;
          signer: true;
        },
        {
          name: 'globalConfig';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: 'tokenMint';
          docs: ['CHECK'];
        },
        {
          name: 'tokenToDca';
          docs: ['CHECK'];
        },
        {
          name: 'bondingCurve';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 111, 110, 100, 105, 110, 103, 95, 99, 117, 114, 118, 101];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'policyMetadata';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  100,
                  99,
                  97,
                  95,
                  112,
                  111,
                  108,
                  105,
                  99,
                  121,
                  95,
                  109,
                  101,
                  116,
                  97,
                  100,
                  97,
                  116,
                  97
                ];
              },
              {
                kind: 'account';
                path: 'globalConfig';
              },
              {
                kind: 'account';
                path: 'bondingCurve';
              }
            ];
          };
        },
        {
          name: 'policy';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [100, 99, 97, 95, 112, 111, 108, 105, 99, 121];
              },
              {
                kind: 'account';
                path: 'policyMetadata';
              },
              {
                kind: 'account';
                path: 'tokenToDca';
              }
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        }
      ];
      args: [
        {
          name: 'fundAmount';
          type: 'u64';
        },
        {
          name: 'dcaInterval';
          type: 'u64';
        },
        {
          name: 'minTokenPrice';
          type: 'u64';
        },
        {
          name: 'maxTokenPrice';
          type: 'u64';
        }
      ];
    },
    {
      name: 'simulateSwap';
      discriminator: [91, 71, 52, 125, 156, 83, 182, 136];
      accounts: [
        {
          name: 'globalConfig';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: 'bondingCurve';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 111, 110, 100, 105, 110, 103, 95, 99, 117, 114, 118, 101];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'tokenMint';
        }
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
        {
          name: 'direction';
          type: 'u8';
        }
      ];
      returns: 'u64';
    },
    {
      name: 'stake';
      discriminator: [206, 176, 202, 18, 200, 209, 179, 108];
      accounts: [
        {
          name: 'signer';
          writable: true;
          signer: true;
        },
        {
          name: 'globalConfig';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: 'stakingConfig';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 105, 110, 103, 95, 99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: 'bondingCurve';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 111, 110, 100, 105, 110, 103, 95, 99, 117, 114, 118, 101];
              },
              {
                kind: 'account';
                path: 'rewardCurrencyMint';
              }
            ];
          };
        },
        {
          name: 'stakingVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 105, 110, 103, 95, 118, 97, 117, 108, 116, 95, 118, 50];
              },
              {
                kind: 'account';
                path: 'rewardCurrencyMint';
              }
            ];
          };
        },
        {
          name: 'vaultStakingTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'stakingVault';
              },
              {
                kind: 'account';
                path: 'tokenProgram';
              },
              {
                kind: 'account';
                path: 'stakeCurrencyMint';
              }
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ];
            };
          };
        },
        {
          name: 'userStakeInfoPda';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 101, 114, 95, 105, 110, 102, 111, 95, 118, 50];
              },
              {
                kind: 'account';
                path: 'stakingVault';
              },
              {
                kind: 'account';
                path: 'signer';
              }
            ];
          };
        },
        {
          name: 'stakerTokenAccount';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'signer';
              },
              {
                kind: 'account';
                path: 'tokenProgram';
              },
              {
                kind: 'account';
                path: 'stakeCurrencyMint';
              }
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ];
            };
          };
        },
        {
          name: 'rewardCurrencyMint';
        },
        {
          name: 'stakeCurrencyMint';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        }
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        }
      ];
    },
    {
      name: 'stakeConfigure';
      discriminator: [38, 52, 148, 167, 203, 105, 61, 195];
      accounts: [
        {
          name: 'payer';
          writable: true;
          signer: true;
        },
        {
          name: 'authority';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [97, 117, 116, 104, 111, 114, 105, 116, 121];
              }
            ];
          };
        },
        {
          name: 'stakingConfig';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 105, 110, 103, 95, 99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: 'pause';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [112, 97, 117, 115, 101];
              }
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        }
      ];
      args: [
        {
          name: 'stakingConfig';
          type: {
            defined: {
              name: 'stakingConfig';
            };
          };
        }
      ];
    },
    {
      name: 'subscribeDcaPolicy';
      discriminator: [82, 204, 84, 134, 255, 115, 141, 16];
      accounts: [
        {
          name: 'agentWallet';
          writable: true;
          signer: true;
        },
        {
          name: 'globalConfig';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: 'tokenMint';
          docs: ['CHECK'];
        },
        {
          name: 'tokenToDca';
          docs: ['CHECK'];
        },
        {
          name: 'bondingCurve';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 111, 110, 100, 105, 110, 103, 95, 99, 117, 114, 118, 101];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'policyMetadata';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [
                  100,
                  99,
                  97,
                  95,
                  112,
                  111,
                  108,
                  105,
                  99,
                  121,
                  95,
                  109,
                  101,
                  116,
                  97,
                  100,
                  97,
                  116,
                  97
                ];
              },
              {
                kind: 'account';
                path: 'globalConfig';
              },
              {
                kind: 'account';
                path: 'bondingCurve';
              }
            ];
          };
        },
        {
          name: 'policy';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [100, 99, 97, 95, 112, 111, 108, 105, 99, 121];
              },
              {
                kind: 'account';
                path: 'policyMetadata';
              },
              {
                kind: 'account';
                path: 'tokenToDca';
              }
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        }
      ];
      args: [];
    },
    {
      name: 'swap';
      discriminator: [248, 198, 158, 145, 225, 117, 135, 200];
      accounts: [
        {
          name: 'globalConfig';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: 'pause';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [112, 97, 117, 115, 101];
              }
            ];
          };
        },
        {
          name: 'teamWallet';
          writable: true;
        },
        {
          name: 'creatorWallet';
          writable: true;
        },
        {
          name: 'bondingCurve';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 111, 110, 100, 105, 110, 103, 95, 99, 117, 114, 118, 101];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'curveVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 117, 114, 118, 101, 95, 118, 97, 117, 108, 116];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'stakingVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 105, 110, 103, 95, 118, 97, 117, 108, 116, 95, 118, 50];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'userStakeInfoPda';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 101, 114, 95, 105, 110, 102, 111, 95, 118, 50];
              },
              {
                kind: 'account';
                path: 'stakingVault';
              },
              {
                kind: 'account';
                path: 'user';
              }
            ];
          };
        },
        {
          name: 'userInfoPda';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [117, 115, 101, 114, 95, 105, 110, 102, 111];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              },
              {
                kind: 'account';
                path: 'user';
              }
            ];
          };
        },
        {
          name: 'tokenMint';
        },
        {
          name: 'curveVaultAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'curveVault';
              },
              {
                kind: 'account';
                path: 'tokenProgram';
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ];
            };
          };
        },
        {
          name: 'userAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'tokenProgram';
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ];
            };
          };
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        }
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
        {
          name: 'direction';
          type: 'u8';
        },
        {
          name: 'minimumReceiveAmount';
          type: 'u64';
        }
      ];
      returns: 'u64';
    },
    {
      name: 'swapLegacy';
      discriminator: [130, 192, 69, 22, 66, 183, 114, 248];
      accounts: [
        {
          name: 'globalConfig';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: 'pause';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [112, 97, 117, 115, 101];
              }
            ];
          };
        },
        {
          name: 'teamWallet';
          writable: true;
        },
        {
          name: 'creatorWallet';
          writable: true;
        },
        {
          name: 'bondingCurve';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 111, 110, 100, 105, 110, 103, 95, 99, 117, 114, 118, 101];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'curveVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 117, 114, 118, 101, 95, 118, 97, 117, 108, 116];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'stakingVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 105, 110, 103, 95, 118, 97, 117, 108, 116];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'userStakeInfoPda';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [115, 116, 97, 107, 101, 95, 105, 110, 102, 111];
              },
              {
                kind: 'account';
                path: 'stakingVault';
              },
              {
                kind: 'account';
                path: 'user';
              }
            ];
          };
        },
        {
          name: 'tokenMint';
        },
        {
          name: 'curveVaultAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'curveVault';
              },
              {
                kind: 'account';
                path: 'tokenProgram';
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ];
            };
          };
        },
        {
          name: 'userAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'user';
              },
              {
                kind: 'account';
                path: 'tokenProgram';
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ];
            };
          };
        },
        {
          name: 'user';
          writable: true;
          signer: true;
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        }
      ];
      args: [
        {
          name: 'amount';
          type: 'u64';
        },
        {
          name: 'direction';
          type: 'u8';
        },
        {
          name: 'minimumReceiveAmount';
          type: 'u64';
        }
      ];
      returns: 'u64';
    },
    {
      name: 'updateDca';
      discriminator: [66, 48, 85, 161, 54, 91, 158, 110];
      accounts: [
        {
          name: 'admin';
          writable: true;
          signer: true;
        },
        {
          name: 'authority';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [97, 117, 116, 104, 111, 114, 105, 116, 121];
              }
            ];
          };
        },
        {
          name: 'globalConfig';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: 'tokenMint';
          docs: ['CHECK'];
        },
        {
          name: 'bondingCurve';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 111, 110, 100, 105, 110, 103, 95, 99, 117, 114, 118, 101];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        }
      ];
      args: [
        {
          name: 'fundsExpiration';
          type: 'u64';
        }
      ];
    },
    {
      name: 'withdraw';
      discriminator: [183, 18, 70, 156, 148, 109, 161, 34];
      accounts: [
        {
          name: 'globalConfig';
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 111, 110, 102, 105, 103];
              }
            ];
          };
        },
        {
          name: 'migrator';
          writable: true;
          signer: true;
        },
        {
          name: 'agentWallet';
          writable: true;
        },
        {
          name: 'tokenMint';
        },
        {
          name: 'bondingCurve';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [98, 111, 110, 100, 105, 110, 103, 95, 99, 117, 114, 118, 101];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'curveVault';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 117, 114, 118, 101, 95, 118, 97, 117, 108, 116];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'vaultAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'curveVault';
              },
              {
                kind: 'account';
                path: 'tokenProgram';
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ];
            };
          };
        },
        {
          name: 'migratorAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'migrator';
              },
              {
                kind: 'account';
                path: 'tokenProgram';
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ];
            };
          };
        },
        {
          name: 'creatorInfo';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'const';
                value: [99, 114, 101, 97, 116, 111, 114, 95, 105, 110, 102, 111];
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
          };
        },
        {
          name: 'vestingAccount';
        },
        {
          name: 'vestingAta';
          writable: true;
          pda: {
            seeds: [
              {
                kind: 'account';
                path: 'vestingAccount';
              },
              {
                kind: 'account';
                path: 'tokenProgram';
              },
              {
                kind: 'account';
                path: 'tokenMint';
              }
            ];
            program: {
              kind: 'const';
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ];
            };
          };
        },
        {
          name: 'systemProgram';
          address: '11111111111111111111111111111111';
        },
        {
          name: 'tokenProgram';
        },
        {
          name: 'associatedTokenProgram';
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
        }
      ];
      args: [];
    }
  ];
  accounts: [
    {
      name: 'authority';
      discriminator: [36, 108, 254, 18, 167, 144, 27, 36];
    },
    {
      name: 'bondingCurve';
      discriminator: [23, 183, 248, 55, 96, 216, 172, 96];
    },
    {
      name: 'config';
      discriminator: [155, 12, 170, 224, 30, 250, 204, 130];
    },
    {
      name: 'creatorInfo';
      discriminator: [86, 132, 42, 176, 155, 145, 82, 178];
    },
    {
      name: 'dcaPolicy';
      discriminator: [78, 226, 38, 12, 44, 111, 99, 217];
    },
    {
      name: 'dcaPolicyMetadata';
      discriminator: [150, 8, 91, 167, 79, 81, 236, 7];
    },
    {
      name: 'idoConfig';
      discriminator: [240, 231, 184, 26, 57, 45, 59, 117];
    },
    {
      name: 'pause';
      discriminator: [168, 183, 252, 225, 28, 17, 138, 174];
    },
    {
      name: 'stakeInfo';
      discriminator: [66, 62, 68, 70, 108, 179, 183, 235];
    },
    {
      name: 'stakerInfoV2';
      discriminator: [95, 16, 40, 131, 193, 0, 207, 75];
    },
    {
      name: 'stakingConfig';
      discriminator: [45, 134, 252, 82, 37, 57, 84, 25];
    },
    {
      name: 'stakingVault';
      discriminator: [68, 141, 118, 28, 87, 84, 213, 233];
    },
    {
      name: 'stakingVaultV2';
      discriminator: [112, 216, 135, 189, 96, 82, 32, 209];
    },
    {
      name: 'userInfo';
      discriminator: [83, 134, 200, 56, 144, 56, 10, 62];
    }
  ];
  events: [
    {
      name: 'completeEvent';
      discriminator: [95, 114, 97, 156, 212, 46, 152, 8];
    },
    {
      name: 'eventDcaSubscriptionPolicy';
      discriminator: [188, 138, 100, 213, 31, 74, 239, 21];
    },
    {
      name: 'eventRegisterDcaPolicy';
      discriminator: [133, 252, 48, 89, 28, 89, 213, 29];
    },
    {
      name: 'eventStake';
      discriminator: [193, 220, 225, 33, 201, 27, 61, 43];
    },
    {
      name: 'eventUnstake';
      discriminator: [7, 14, 248, 129, 43, 55, 41, 104];
    },
    {
      name: 'launchEvent';
      discriminator: [27, 193, 47, 130, 115, 92, 239, 94];
    },
    {
      name: 'swapEvent';
      discriminator: [64, 198, 205, 232, 38, 8, 113, 226];
    },
    {
      name: 'triggerLaunchEvent';
      discriminator: [149, 6, 64, 217, 221, 50, 68, 145];
    },
    {
      name: 'withdrawEvent';
      discriminator: [22, 9, 133, 26, 160, 44, 71, 192];
    }
  ];
  errors: [
    {
      code: 6000;
      name: 'valueTooSmall';
      msg: 'valueTooSmall';
    },
    {
      code: 6001;
      name: 'valueTooLarge';
      msg: 'valueTooLarge';
    },
    {
      code: 6002;
      name: 'valueInvalid';
      msg: 'valueInvalid';
    },
    {
      code: 6003;
      name: 'incorrectConfigAccount';
      msg: 'incorrectConfigAccount';
    },
    {
      code: 6004;
      name: 'incorrectAuthority';
      msg: 'incorrectAuthority';
    },
    {
      code: 6005;
      name: 'overflowOrUnderflowOccurred';
      msg: 'Overflow or underflow occured';
    },
    {
      code: 6006;
      name: 'invalidAmount';
      msg: 'Amount is invalid';
    },
    {
      code: 6007;
      name: 'incorrectTeamWallet';
      msg: 'Incorrect team wallet address';
    },
    {
      code: 6008;
      name: 'curveNotCompleted';
      msg: 'Curve is not completed';
    },
    {
      code: 6009;
      name: 'curveAlreadyCompleted';
      msg: 'Can not swap after the curve is completed';
    },
    {
      code: 6010;
      name: 'returnAmountTooSmall';
      msg: 'Return amount is too small compared to the minimum received amount';
    },
    {
      code: 6011;
      name: 'swapAmountTooLarge';
      msg: 'Swap amount is too large';
    },
    {
      code: 6012;
      name: 'cannotBuy';
      msg: 'Cannot buy';
    },
    {
      code: 6013;
      name: 'paused';
      msg: 'paused';
    },
    {
      code: 6014;
      name: 'invalidDirection';
      msg: 'Invalid swap direction';
    },
    {
      code: 6015;
      name: 'poolNotOpen';
      msg: 'The pool is not open.';
    },
    {
      code: 6016;
      name: 'returnAmountTooLarge';
      msg: 'Return amount is too larger compared to the maximum received amount';
    },
    {
      code: 6017;
      name: 'invalidProof';
      msg: 'Invalid Merkle proof.';
    },
    {
      code: 6018;
      name: 'invalidMode';
      msg: 'Invalid mode';
    },
    {
      code: 6019;
      name: 'cannotClaim';
      msg: 'Cannot claim token';
    },
    {
      code: 6020;
      name: 'invalidVestingPeriod';
      msg: 'Invalid vesting period';
    },
    {
      code: 6021;
      name: 'invalidCreatorFee';
      msg: 'Invalid creator fee';
    },
    {
      code: 6022;
      name: 'noTokens';
      msg: 'No Tokens to stake';
    },
    {
      code: 6023;
      name: 'vaultEnded';
      msg: 'Vault has been ended';
    },
    {
      code: 6024;
      name: 'notStaked';
      msg: 'Tokens not staked';
    },
    {
      code: 6025;
      name: 'unbondingTimeNotOverYet';
      msg: 'The unbonding time is not over yet';
    },
    {
      code: 6026;
      name: 'vaultNotStarted';
      msg: 'Vault not started';
    },
    {
      code: 6027;
      name: 'tgeNotYetReached';
      msg: 'Need to wait til TGE';
    },
    {
      code: 6028;
      name: 'overflowError';
      msg: 'overflow';
    },
    {
      code: 6029;
      name: 'invalidDcaInterval';
      msg: 'Invalid DCA Interval';
    },
    {
      code: 6030;
      name: 'invalidDcaAmount';
      msg: 'Invalid DCA amount';
    },
    {
      code: 6031;
      name: 'invalidStakingToken';
      msg: 'Invalid staking token';
    },
    {
      code: 6032;
      name: 'dcaAlreadySubscribed';
      msg: 'DCA Already Subscribed';
    },
    {
      code: 6033;
      name: 'dcaNotReadyForSubscribed';
      msg: 'DCA Not Ready to be subscribed';
    }
  ];
  types: [
    {
      name: 'authority';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'admin';
            type: 'pubkey';
          },
          {
            name: 'pendingAdmin';
            type: 'pubkey';
          }
        ];
      };
    },
    {
      name: 'bondingCurve';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'tokenMint';
            type: 'pubkey';
          },
          {
            name: 'creator';
            type: 'pubkey';
          },
          {
            name: 'initLamport';
            type: 'u64';
          },
          {
            name: 'initToken';
            type: 'u64';
          },
          {
            name: 'reserveLamport';
            type: 'u64';
          },
          {
            name: 'reserveToken';
            type: 'u64';
          },
          {
            name: 'isCompleted';
            type: 'bool';
          },
          {
            name: 'partyStart';
            type: 'u64';
          },
          {
            name: 'publicStart';
            type: 'u64';
          },
          {
            name: 'curveCreationDate';
            type: 'i64';
          },
          {
            name: 'partyAmount';
            type: 'u64';
          },
          {
            name: 'whitelistRoundPeriod';
            type: 'u64';
          },
          {
            name: 'curveLimit';
            type: 'u64';
          },
          {
            name: 'fundsExpiration';
            type: 'u64';
          },
          {
            name: 'agentWallet';
            type: 'pubkey';
          },
          {
            name: 'migrationAmount';
            type: 'u64';
          },
          {
            name: 'fundsAmount';
            type: 'u64';
          },
          {
            name: 'partyLimit';
            type: 'u64';
          },
          {
            name: 'mode';
            type: {
              defined: {
                name: 'mode';
              };
            };
          },
          {
            name: 'canClaim';
            type: 'bool';
          },
          {
            name: 'tokenType';
            type: 'bool';
          }
        ];
      };
    },
    {
      name: 'completeEvent';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'user';
            type: 'pubkey';
          },
          {
            name: 'mint';
            type: 'pubkey';
          },
          {
            name: 'bondingCurve';
            type: 'pubkey';
          },
          {
            name: 'completeTimestamp';
            type: 'i64';
          },
          {
            name: 'migrationTokenAmount';
            type: 'u64';
          },
          {
            name: 'migrationLamportAmount';
            type: 'u64';
          },
          {
            name: 'agentWallet';
            type: 'pubkey';
          },
          {
            name: 'mode';
            type: {
              defined: {
                name: 'mode';
              };
            };
          }
        ];
      };
    },
    {
      name: 'config';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'teamWallet';
            type: 'pubkey';
          },
          {
            name: 'migrator';
            type: 'pubkey';
          },
          {
            name: 'communityPoolWallet';
            type: 'pubkey';
          },
          {
            name: 'stakingPoolWallet';
            type: 'pubkey';
          },
          {
            name: 'platformBuyFee';
            type: 'f64';
          },
          {
            name: 'platformSellFee';
            type: 'f64';
          },
          {
            name: 'minCurveLimit';
            type: 'u64';
          },
          {
            name: 'lamportAmountConfig';
            type: 'u64';
          },
          {
            name: 'tokenSupplyConfig';
            type: 'u64';
          },
          {
            name: 'tokenDecimalsConfig';
            type: 'u8';
          },
          {
            name: 'minWhitelistRoundPeriod';
            type: 'u64';
          },
          {
            name: 'waitingPeriod';
            type: 'u64';
          },
          {
            name: 'creatorFee';
            type: 'f64';
          },
          {
            name: 'communityPoolFee';
            type: 'f64';
          },
          {
            name: 'agentFee';
            type: 'f64';
          },
          {
            name: 'stakingFee';
            type: 'f64';
          },
          {
            name: 'softCap';
            type: 'u64';
          },
          {
            name: 'stakingToken';
            type: 'pubkey';
          },
          {
            name: 'lockPeriod';
            type: 'u64';
          },
          {
            name: 'partyAmountPercent';
            type: 'f64';
          },
          {
            name: 'migrationLamport';
            type: 'u64';
          },
          {
            name: 'waitingPeriodToClaim';
            type: 'u64';
          },
          {
            name: 'migrationFee';
            type: 'u64';
          },
          {
            name: 'creatorSwapFee';
            type: 'f64';
          }
        ];
      };
    },
    {
      name: 'creatorInfo';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'creator';
            type: 'pubkey';
          },
          {
            name: 'tokenMint';
            type: 'pubkey';
          },
          {
            name: 'vestingAmount';
            type: 'u64';
          },
          {
            name: 'vestingStartTime';
            type: 'i64';
          },
          {
            name: 'vestingPeriod';
            type: 'u64';
          }
        ];
      };
    },
    {
      name: 'dcaPolicy';
      docs: ['A single DCA policy, applied only to one DCA token'];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            docs: ['Bump seed.'];
            type: {
              array: ['u8', 1];
            };
          },
          {
            name: 'version';
            type: 'u8';
          },
          {
            name: 'policyMetadata';
            type: 'pubkey';
          },
          {
            name: 'tokenToDca';
            type: 'pubkey';
          },
          {
            name: 'dcaInterval';
            type: 'u64';
          },
          {
            name: 'minTokenOutAmountPerCycle';
            type: 'u64';
          },
          {
            name: 'maxTokenOutAmountPerCycle';
            type: 'u64';
          },
          {
            name: 'tokenPriceDecimals';
            type: 'u8';
          },
          {
            name: 'policyRegistrationTimestamp';
            type: 'i64';
          },
          {
            name: 'policySubscriptionTimestamp';
            type: 'i64';
          },
          {
            name: 'subscribed';
            type: 'bool';
          },
          {
            name: 'fundAmount';
            type: 'u64';
          },
          {
            name: 'agentToken';
            type: 'pubkey';
          }
        ];
      };
    },
    {
      name: 'dcaPolicyMetadata';
      docs: ['Overall DCA policy info, applied to n DCA policies of a bonding curve'];
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            docs: ['Bump seed.'];
            type: {
              array: ['u8', 1];
            };
          },
          {
            name: 'version';
            type: 'u8';
          },
          {
            name: 'globalConfig';
            type: 'pubkey';
          },
          {
            name: 'bondingCurve';
            type: 'pubkey';
          },
          {
            name: 'totalFunds';
            type: 'u64';
          }
        ];
      };
    },
    {
      name: 'eventDcaSubscriptionPolicy';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'policy';
            type: 'pubkey';
          },
          {
            name: 'subscriptionTimestamp';
            type: 'i64';
          }
        ];
      };
    },
    {
      name: 'eventRegisterDcaPolicy';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'version';
            type: 'u8';
          },
          {
            name: 'globalConfig';
            type: 'pubkey';
          },
          {
            name: 'bondingCurve';
            type: 'pubkey';
          },
          {
            name: 'policyMetadata';
            type: 'pubkey';
          },
          {
            name: 'tokenToDca';
            type: 'pubkey';
          },
          {
            name: 'tokenMint';
            type: 'pubkey';
          },
          {
            name: 'dcaInterval';
            type: 'u64';
          },
          {
            name: 'minTokenOutAmountPerCycle';
            type: 'u64';
          },
          {
            name: 'maxTokenOutAmountPerCycle';
            type: 'u64';
          },
          {
            name: 'registrationTimestamp';
            type: 'i64';
          },
          {
            name: 'fundAmount';
            type: 'u64';
          }
        ];
      };
    },
    {
      name: 'eventStake';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'stakerInfoPub';
            type: 'pubkey';
          },
          {
            name: 'stakerInfo';
            type: {
              defined: {
                name: 'stakerInfoV2';
              };
            };
          },
          {
            name: 'vaultPub';
            type: 'pubkey';
          },
          {
            name: 'vault';
            type: {
              defined: {
                name: 'stakingVaultV2';
              };
            };
          },
          {
            name: 'stakeCurrencyMint';
            type: 'pubkey';
          },
          {
            name: 'rewardCurrencyMint';
            type: 'pubkey';
          },
          {
            name: 'vaultStakingTokenAccount';
            type: 'pubkey';
          },
          {
            name: 'stakerTokenAccount';
            type: 'pubkey';
          },
          {
            name: 'amount';
            type: 'u64';
          }
        ];
      };
    },
    {
      name: 'eventUnstake';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'stakerInfoPub';
            type: 'pubkey';
          },
          {
            name: 'stakerInfo';
            type: {
              defined: {
                name: 'stakerInfoV2';
              };
            };
          },
          {
            name: 'vaultPub';
            type: 'pubkey';
          },
          {
            name: 'vault';
            type: {
              defined: {
                name: 'stakingVaultV2';
              };
            };
          },
          {
            name: 'stakeCurrencyMint';
            type: 'pubkey';
          },
          {
            name: 'rewardCurrencyMint';
            type: 'pubkey';
          },
          {
            name: 'vaultStakingTokenAccount';
            type: 'pubkey';
          },
          {
            name: 'userTokenAccount';
            type: 'pubkey';
          },
          {
            name: 'amount';
            type: 'u64';
          }
        ];
      };
    },
    {
      name: 'idoConfig';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'partyAmount';
            type: 'u64';
          },
          {
            name: 'priceMultiplierPublicRound';
            type: 'f64';
          },
          {
            name: 'allowSell';
            type: 'bool';
          }
        ];
      };
    },
    {
      name: 'launchEvent';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'creator';
            type: 'pubkey';
          },
          {
            name: 'mint';
            type: 'pubkey';
          },
          {
            name: 'bondingCurve';
            type: 'pubkey';
          },
          {
            name: 'metadata';
            type: 'pubkey';
          },
          {
            name: 'decimals';
            type: 'u8';
          },
          {
            name: 'tokenSupply';
            type: 'u64';
          },
          {
            name: 'reserveLamport';
            type: 'u64';
          },
          {
            name: 'reserveToken';
            type: 'u64';
          },
          {
            name: 'curveLimit';
            type: 'u64';
          },
          {
            name: 'mode';
            type: {
              defined: {
                name: 'mode';
              };
            };
          },
          {
            name: 'creatorVestingAmount';
            type: 'u64';
          },
          {
            name: 'creatorVestingPeriod';
            type: 'u64';
          },
          {
            name: 'tokenType';
            type: 'bool';
          }
        ];
      };
    },
    {
      name: 'mode';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'normal';
          },
          {
            name: 'ido';
          }
        ];
      };
    },
    {
      name: 'pause';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'paused';
            type: 'bool';
          }
        ];
      };
    },
    {
      name: 'stakeDetail';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'stakingToken';
            type: 'pubkey';
          },
          {
            name: 'stakeAmount';
            type: 'u64';
          },
          {
            name: 'snapshotAmount';
            type: 'u64';
          },
          {
            name: 'unstakedAtTime';
            type: 'i64';
          }
        ];
      };
    },
    {
      name: 'stakeInfo';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            docs: ['Bump seed used to generate the program address / authority'];
            type: {
              array: ['u8', 1];
            };
          },
          {
            name: 'unstakedAtTime';
            type: 'i64';
          },
          {
            name: 'stakeAmount';
            type: 'u64';
          },
          {
            name: 'snapshotAmount';
            type: 'u64';
          },
          {
            name: 'totalClaim';
            docs: ['check if user has claimed the rewards'];
            type: 'u64';
          },
          {
            name: 'vault';
            docs: ['add vault & staker for filtering'];
            type: 'pubkey';
          },
          {
            name: 'staker';
            type: 'pubkey';
          }
        ];
      };
    },
    {
      name: 'stakerInfoV2';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: {
              array: ['u8', 1];
            };
          },
          {
            name: 'totalClaim';
            type: 'u64';
          },
          {
            name: 'vault';
            docs: ['add vault & staker for filtering'];
            type: 'pubkey';
          },
          {
            name: 'staker';
            type: 'pubkey';
          },
          {
            name: 'stakeDetails';
            type: {
              vec: {
                defined: {
                  name: 'stakeDetail';
                };
              };
            };
          }
        ];
      };
    },
    {
      name: 'stakingConfig';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'stakingToken';
            type: {
              vec: 'pubkey';
            };
          },
          {
            name: 'softCap';
            type: {
              vec: 'u64';
            };
          },
          {
            name: 'tokenAllocation';
            type: {
              vec: 'f64';
            };
          }
        ];
      };
    },
    {
      name: 'stakingVault';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            docs: ['Bump seed used to generate the program address / authority'];
            type: {
              array: ['u8', 1];
            };
          },
          {
            name: 'version';
            type: 'u8';
          },
          {
            name: 'rewardCurrencyMint';
            docs: ['SPL token mint or native mint for claiming reward. This is not MAX!'];
            type: 'pubkey';
          },
          {
            name: 'totalStaked';
            docs: ['total staked'];
            type: 'u64';
          },
          {
            name: 'stakeEndTime';
            type: 'u64';
          },
          {
            name: 'softcap';
            type: 'u64';
          }
        ];
      };
    },
    {
      name: 'stakingVaultV2';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            docs: ['Bump seed used to generate the program address / authority'];
            type: {
              array: ['u8', 1];
            };
          },
          {
            name: 'version';
            type: 'u8';
          },
          {
            name: 'rewardCurrencyMint';
            docs: ['SPL token mint or native mint for claiming reward. This is not MAX!'];
            type: 'pubkey';
          },
          {
            name: 'stakeEndTime';
            type: 'u64';
          },
          {
            name: 'stakingVaultInfos';
            type: {
              vec: {
                defined: {
                  name: 'stakingVaultV2Info';
                };
              };
            };
          }
        ];
      };
    },
    {
      name: 'stakingVaultV2Info';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'stakingToken';
            type: 'pubkey';
          },
          {
            name: 'totalStaked';
            type: 'u64';
          },
          {
            name: 'softcap';
            type: 'u64';
          },
          {
            name: 'tokenAllocation';
            type: 'u64';
          }
        ];
      };
    },
    {
      name: 'swapEvent';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'user';
            type: 'pubkey';
          },
          {
            name: 'mint';
            type: 'pubkey';
          },
          {
            name: 'bondingCurve';
            type: 'pubkey';
          },
          {
            name: 'amountIn';
            type: 'u64';
          },
          {
            name: 'direction';
            type: 'u8';
          },
          {
            name: 'minimumReceiveAmount';
            type: 'u64';
          },
          {
            name: 'amountOut';
            type: 'u64';
          },
          {
            name: 'reserveLamport';
            type: 'u64';
          },
          {
            name: 'reserveToken';
            type: 'u64';
          }
        ];
      };
    },
    {
      name: 'triggerLaunchEvent';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'mint';
            type: 'pubkey';
          },
          {
            name: 'partyStart';
            type: 'u64';
          },
          {
            name: 'publicStart';
            type: 'u64';
          }
        ];
      };
    },
    {
      name: 'userInfo';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'user';
            type: 'pubkey';
          },
          {
            name: 'tokenMint';
            type: 'pubkey';
          },
          {
            name: 'claimableAmount';
            type: 'u64';
          },
          {
            name: 'sellableAmount';
            type: 'u64';
          }
        ];
      };
    },
    {
      name: 'withdrawEvent';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'mint';
            type: 'pubkey';
          },
          {
            name: 'bondingCurve';
            type: 'pubkey';
          },
          {
            name: 'solAmount';
            type: 'u64';
          },
          {
            name: 'tokenAmount';
            type: 'u64';
          }
        ];
      };
    }
  ];
};
