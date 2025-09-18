# az acr build \
          # --image "${{ env.ACR }}-${{env.ACR_CODE}}.azurecr.io/${{ env.CONTAINER_NAME }}:${{ env.CONTAINER_TAG }}" \
          # --registry ${{ env.ACR }} \
          # -g ${{ env.ACR_RG }} \
          # -f ./dockerfiles/Dockerfile .